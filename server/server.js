const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'cozycottage003@gmail.com',
    pass: process.env.EMAIL_PASS // Use app password for Gmail
  }
});

// In-memory storage for demo (use database in production)
const bookings = new Map();
const verificationCodes = new Map();

// Validation middleware
const validateBooking = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('country').trim().isLength({ min: 2 }).withMessage('Country is required'),
  body('checkIn').isISO8601().withMessage('Invalid check-in date'),
  body('checkOut').isISO8601().withMessage('Invalid check-out date'),
  body('guests').isInt({ min: 1 }).withMessage('At least 1 guest required'),
  body('paymentMethod').isIn(['card', 'cash', 'bank_transfer']).withMessage('Invalid payment method'),
];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Send verification code
app.post('/api/bookings/send-verification', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { email } = req.body;
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store verification code (expires in 10 minutes)
    verificationCodes.set(email, {
      code: verificationCode,
      expiresAt: Date.now() + 10 * 60 * 1000
    });

    // Send verification email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'cozycottage003@gmail.com',
      to: email,
      subject: 'Email Verification - Cozy Cottage',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Email Verification</h2>
          <p>Thank you for choosing Cozy Cottage!</p>
          <p>Your verification code is: <strong style="font-size: 24px; color: #f59e0b;">${verificationCode}</strong></p>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this verification, please ignore this email.</p>
          <hr>
          <p style="font-size: 12px; color: #666;">
            Cozy Cottage<br>
            Ella, Sri Lanka
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Verification code sent successfully' 
    });
  } catch (error) {
    console.error('Error sending verification code:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send verification code' 
    });
  }
});

// Verify email code
app.post('/api/bookings/verify-code', [
  body('email').isEmail().normalizeEmail(),
  body('code').isLength({ min: 6, max: 6 }).withMessage('Invalid verification code')
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { email, code } = req.body;
    const storedData = verificationCodes.get(email);

    if (!storedData || storedData.code !== code || Date.now() > storedData.expiresAt) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid or expired verification code' 
      });
    }

    // Remove verification code after successful verification
    verificationCodes.delete(email);

    res.json({ 
      success: true, 
      message: 'Email verified successfully' 
    });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Verification failed' 
    });
  }
});

// Send customer confirmation
app.post('/api/bookings/customer-confirmation', validateBooking, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const bookingData = req.body;
    const bookingId = uuidv4();

    // Store booking
    bookings.set(bookingId, {
      ...bookingData,
      id: bookingId,
      status: 'pending',
      createdAt: new Date().toISOString()
    });

    // Send confirmation email to customer
    const mailOptions = {
      from: process.env.EMAIL_USER || 'cozycottage003@gmail.com',
      to: bookingData.email,
      subject: 'Booking Confirmation - Cozy Cottage',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Booking Confirmation</h2>
          <p>Dear ${bookingData.name},</p>
          <p>Thank you for your booking request at Cozy Cottage!</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Booking Details</h3>
            <p><strong>Booking ID:</strong> ${bookingId}</p>
            <p><strong>Check-in:</strong> ${new Date(bookingData.checkIn).toLocaleDateString()}</p>
            <p><strong>Check-out:</strong> ${new Date(bookingData.checkOut).toLocaleDateString()}</p>
            <p><strong>Guests:</strong> ${bookingData.guests}</p>
            <p><strong>Total Price:</strong> $${bookingData.totalPrice}</p>
            <p><strong>Payment Method:</strong> ${bookingData.paymentMethod}</p>
          </div>

          <p>We will review your booking request and contact you within 24 hours to confirm availability and provide payment instructions.</p>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <hr>
          <p style="font-size: 12px; color: #666;">
            Cozy Cottage<br>
            Ella, Sri Lanka<br>
            Email: cozycottage003@gmail.com
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Customer confirmation sent successfully',
      bookingId 
    });
  } catch (error) {
    console.error('Error sending customer confirmation:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send customer confirmation' 
    });
  }
});

// Send admin notification
app.post('/api/bookings/admin-notification', validateBooking, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const bookingData = req.body;
    const adminEmail = process.env.ADMIN_EMAIL || 'cozycottage003@gmail.com';

    // Send notification email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER || 'cozycottage003@gmail.com',
      to: adminEmail,
      subject: 'New Booking Request - Cozy Cottage',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Booking Request</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> ${bookingData.name}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>WhatsApp:</strong> ${bookingData.whatsapp || 'Not provided'}</p>
            <p><strong>Country:</strong> ${bookingData.country}</p>
            
            <h3>Booking Details</h3>
            <p><strong>Check-in:</strong> ${new Date(bookingData.checkIn).toLocaleDateString()}</p>
            <p><strong>Check-out:</strong> ${new Date(bookingData.checkOut).toLocaleDateString()}</p>
            <p><strong>Guests:</strong> ${bookingData.guests}</p>
            <p><strong>Total Price:</strong> $${bookingData.totalPrice}</p>
            <p><strong>Payment Method:</strong> ${bookingData.paymentMethod}</p>
            
            <h3>Rooms</h3>
            ${bookingData.rooms.map(room => 
              `<p>• ${room.name}: ${room.count} room(s) - $${room.price}/night</p>`
            ).join('')}
            
            ${bookingData.specialRequests ? `<h3>Special Requests</h3><p>${bookingData.specialRequests}</p>` : ''}
            ${bookingData.dietaryRestrictions ? `<h3>Dietary Restrictions</h3><p>${bookingData.dietaryRestrictions}</p>` : ''}
          </div>

          <p>Please review this booking request and contact the customer to confirm availability.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Admin notification sent successfully' 
    });
  } catch (error) {
    console.error('Error sending admin notification:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send admin notification' 
    });
  }
});

// Get all bookings (admin only)
app.get('/api/bookings', (req, res) => {
  try {
    const bookingsList = Array.from(bookings.values());
    res.json({ 
      success: true, 
      bookings: bookingsList 
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch bookings' 
    });
  }
});

// Update booking status (admin only)
app.patch('/api/bookings/:id/status', [
  body('status').isIn(['confirmed', 'cancelled', 'completed']).withMessage('Invalid status')
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { id } = req.params;
    const { status } = req.body;

    const booking = bookings.get(id);
    if (!booking) {
      return res.status(404).json({ 
        success: false, 
        message: 'Booking not found' 
      });
    }

    booking.status = status;
    booking.updatedAt = new Date().toISOString();

    res.json({ 
      success: true, 
      message: 'Booking status updated successfully',
      booking 
    });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update booking status' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
}); 