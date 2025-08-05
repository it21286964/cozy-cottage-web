# Enhanced Reservation System - Cozy Cottage

## Overview

This document outlines the comprehensive reservation system implemented for Cozy Cottage, including form validation, email verification, booking management, and admin dashboard functionality.

## Features Implemented

### 1. Enhanced Booking Form
- **Comprehensive Form Validation**: Using Zod schema validation
- **Email Verification**: 6-digit verification code system
- **Real-time Price Calculation**: Dynamic pricing based on room selection and dates
- **Special Requests**: Dietary restrictions and special preferences
- **Payment Method Selection**: Card, cash, or bank transfer options
- **Terms & Conditions**: Required acceptance with marketing consent option

### 2. Email System
- **Email Verification**: Send and verify 6-digit codes
- **Customer Confirmation**: Professional booking confirmation emails
- **Admin Notifications**: Detailed booking notifications to admin
- **HTML Email Templates**: Beautiful, responsive email designs

### 3. Backend API
- **Express.js Server**: RESTful API endpoints
- **Input Validation**: Comprehensive validation using express-validator
- **Rate Limiting**: Protection against spam and abuse
- **Security**: Helmet.js for security headers and CORS protection
- **Email Integration**: Nodemailer with Gmail SMTP

### 4. Admin Dashboard
- **Booking Management**: View, filter, and manage all bookings
- **Status Updates**: Confirm, cancel, or complete bookings
- **Statistics**: Real-time booking statistics
- **Detailed Views**: Complete booking information display

## System Architecture

```
Frontend (React + TypeScript)
├── BookingForm.tsx (Enhanced form with validation)
├── AdminDashboard.tsx (Admin management interface)
├── emailService.ts (Email service integration)
└── Pages
    ├── BookingFormPage.tsx
    └── Admin.tsx

Backend (Node.js + Express)
├── server.js (Main server with API endpoints)
├── Email handling (Nodemailer)
├── Validation (express-validator)
└── Security (Helmet, CORS, Rate limiting)
```

## Setup Instructions

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd cozy-cottage-web
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

### Backend Setup

1. **Navigate to Server Directory**
   ```bash
   cd cozy-cottage-web/server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the server directory:
   ```env
   PORT=3001
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   EMAIL_USER=cozycottage003@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ADMIN_EMAIL=cozycottage003@gmail.com
   JWT_SECRET=your_jwt_secret_here
   ```

4. **Gmail App Password Setup**
   - Enable 2-Factor Authentication on Gmail
   - Generate App Password: Google Account → Security → 2-Step Verification → App passwords
   - Use the generated password in `EMAIL_PASS`

5. **Start Backend Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Email Verification
- `POST /api/bookings/send-verification` - Send verification code
- `POST /api/bookings/verify-code` - Verify email code

### Booking Management
- `POST /api/bookings/customer-confirmation` - Send customer confirmation
- `POST /api/bookings/admin-notification` - Send admin notification
- `GET /api/bookings` - Get all bookings (admin)
- `PATCH /api/bookings/:id/status` - Update booking status

### Health Check
- `GET /api/health` - Server health status

## Form Validation Features

### Client-Side Validation (Zod)
- **Name**: Minimum 2 characters
- **Email**: Valid email format with verification
- **Country**: Required field
- **Dates**: Check-in must be in future, check-out after check-in
- **Guests**: Minimum 1 guest, cannot exceed room capacity
- **Payment Method**: Must be one of: card, cash, bank_transfer
- **Terms**: Must be accepted

### Server-Side Validation (express-validator)
- **Input Sanitization**: Clean and normalize inputs
- **Type Validation**: Ensure correct data types
- **Business Logic**: Validate booking constraints
- **Rate Limiting**: Prevent abuse

## Email System Features

### Email Verification
- **6-Digit Code**: Randomly generated verification codes
- **10-Minute Expiration**: Codes expire for security
- **Professional Templates**: Beautiful HTML email design
- **Error Handling**: Comprehensive error management

### Booking Confirmations
- **Customer Email**: Booking details and next steps
- **Admin Notification**: Complete booking information
- **HTML Templates**: Responsive, professional design
- **Booking ID**: Unique identifier for tracking

## Admin Dashboard Features

### Booking Management
- **Real-time Statistics**: Total, pending, confirmed, cancelled, completed
- **Filtering**: Filter by booking status
- **Detailed Views**: Complete booking information
- **Status Updates**: Confirm, cancel, or complete bookings

### User Interface
- **Responsive Design**: Works on all device sizes
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Success/error feedback

## Security Features

### Frontend Security
- **Input Validation**: Client-side validation with Zod
- **XSS Protection**: Sanitized inputs
- **CSRF Protection**: Built into React Router

### Backend Security
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Server-side validation
- **CORS Protection**: Configured for frontend domain
- **Helmet.js**: Security headers
- **Error Handling**: Proper error responses

## Email Templates

### Verification Email
```html
- Professional header with Cozy Cottage branding
- 6-digit verification code prominently displayed
- 10-minute expiration notice
- Contact information and footer
```

### Customer Confirmation
```html
- Personalized greeting with customer name
- Complete booking details (dates, rooms, price)
- Next steps and contact information
- Professional footer with hotel details
```

### Admin Notification
```html
- Customer information (name, email, phone, country)
- Complete booking details
- Room selections and pricing
- Special requests and dietary restrictions
- Action items for admin
```

## User Experience Features

### Booking Form
- **Progressive Disclosure**: Information organized in sections
- **Real-time Validation**: Immediate feedback on form errors
- **Email Verification**: Secure email verification process
- **Price Calculation**: Dynamic pricing updates
- **Room Selection**: Intuitive room quantity selection
- **Special Requests**: Optional fields for preferences

### Admin Dashboard
- **Statistics Overview**: Quick view of booking status
- **Filtering**: Easy filtering by booking status
- **Detailed Views**: Complete booking information
- **Status Management**: One-click status updates
- **Responsive Design**: Works on all devices

## Error Handling

### Frontend Error Handling
- **Form Validation**: Clear error messages
- **API Errors**: User-friendly error notifications
- **Network Errors**: Graceful fallbacks
- **Loading States**: Proper loading indicators

### Backend Error Handling
- **Validation Errors**: Detailed validation messages
- **Email Errors**: Proper error responses
- **Database Errors**: Graceful error handling
- **Rate Limiting**: Clear rate limit messages

## Future Enhancements

### Planned Features
1. **Database Integration**: Replace in-memory storage with PostgreSQL
2. **Authentication**: JWT-based admin authentication
3. **Payment Integration**: Stripe/PayPal payment processing
4. **Calendar Integration**: Real-time availability checking
5. **SMS Notifications**: WhatsApp/SMS integration
6. **Analytics Dashboard**: Booking analytics and reports
7. **Multi-language Support**: Internationalization
8. **Mobile App**: React Native mobile application

### Technical Improvements
1. **Testing**: Unit and integration tests
2. **Logging**: Comprehensive logging system
3. **Monitoring**: Application monitoring and alerts
4. **Caching**: Redis caching for performance
5. **CDN**: Static asset optimization
6. **SSL**: HTTPS implementation
7. **Backup**: Automated backup system

## Troubleshooting

### Common Issues

#### Email Not Sending
1. Check Gmail app password is correct
2. Ensure 2FA is enabled on Gmail account
3. Verify environment variables are set correctly
4. Check firewall/network settings

#### CORS Errors
1. Ensure `FRONTEND_URL` is set correctly
2. Check that frontend is running on correct port
3. Verify CORS configuration in server.js

#### Validation Errors
1. Check request body format
2. Ensure all required fields are provided
3. Verify email format and date formats

#### Booking Form Issues
1. Check email verification is completed
2. Ensure room selection matches guest count
3. Verify dates are valid and in correct order

## Support

For technical support or questions about the reservation system:

- **Email**: cozycottage003@gmail.com
- **Documentation**: This file and README files
- **GitHub**: Repository issues and discussions

## License

This reservation system is proprietary to Cozy Cottage. All rights reserved. 