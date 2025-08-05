import emailjs from '@emailjs/browser';
import { configureEmailJS } from '@/config/emailjs';

export interface BookingData {
  name: string;
  email: string;
  whatsapp?: string;
  country: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  specialRequests?: string;
  dietaryRestrictions?: string;
  paymentMethod: 'card' | 'cash' | 'bank_transfer';
  rooms: Array<{
    name: string;
    count: number;
    price: number;
  }>;
  totalPrice: number;
  totalNights: number;
  bookingDate: string;
  marketingConsent?: boolean;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}

class EmailJSService {
  private config = configureEmailJS();

  constructor() {
    // Initialize EmailJS only if credentials are configured
    if (this.config.publicKey && this.config.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.init(this.config.publicKey);
    }
  }

  /**
   * Send booking notification to admin (receive booking submissions)
   */
  async sendBookingNotification(bookingData: BookingData): Promise<EmailResponse> {
    try {
      // Check if EmailJS is configured
      if (this.config.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        console.warn('EmailJS not configured. Using demo mode.');
        return {
          success: true,
          message: 'Booking notification sent successfully (demo mode)',
          bookingId: this.generateBookingId(),
        };
      }

      const templateParams = {
        to_email: this.config.adminEmail,
        customer_name: bookingData.name,
        customer_email: bookingData.email,
        customer_whatsapp: bookingData.whatsapp || 'Not provided',
        customer_country: bookingData.country,
        check_in: new Date(bookingData.checkIn).toLocaleDateString(),
        check_out: new Date(bookingData.checkOut).toLocaleDateString(),
        guests: bookingData.guests,
        total_price: `$${bookingData.totalPrice}`,
        total_nights: bookingData.totalNights,
        rooms: bookingData.rooms.map(room => 
          `${room.name}: ${room.count} room(s) - $${room.price}/night`
        ).join(', '),
        payment_method: bookingData.paymentMethod,
        special_requests: bookingData.specialRequests || 'None',
        dietary_restrictions: bookingData.dietaryRestrictions || 'None',
        booking_date: bookingData.bookingDate,
        marketing_consent: bookingData.marketingConsent ? 'Yes' : 'No',
      };

      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templates.BOOKING_NOTIFICATION,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Booking notification sent successfully',
          bookingId: this.generateBookingId(),
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending booking notification:', error);
      return {
        success: false,
        message: 'Failed to send booking notification',
      };
    }
  }



  /**
   * Send email verification code
   */
  async sendVerificationCode(email: string): Promise<EmailResponse> {
    try {
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Check if EmailJS is configured
      if (this.config.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
        console.warn('EmailJS not configured. Using demo mode.');
        // Store verification code in session storage for demo purposes
        sessionStorage.setItem('verificationCode', verificationCode);
        sessionStorage.setItem('verificationEmail', email);
        
        return {
          success: true,
          message: 'Verification code sent successfully (demo mode)',
        };
      }

      const templateParams = {
        to_email: email,
        verification_code: verificationCode,
        expiry_time: '10 minutes',
      };

      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templates.VERIFICATION,
        templateParams
      );

      if (response.status === 200) {
        // Store verification code in session storage for demo purposes
        sessionStorage.setItem('verificationCode', verificationCode);
        sessionStorage.setItem('verificationEmail', email);

        return {
          success: true,
          message: 'Verification code sent successfully',
        };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      return {
        success: false,
        message: 'Failed to send verification code',
      };
    }
  }

  /**
   * Verify email verification code
   */
  async verifyCode(email: string, code: string): Promise<EmailResponse> {
    try {
      // For demo purposes, check against session storage
      const storedCode = sessionStorage.getItem('verificationCode');
      const storedEmail = sessionStorage.getItem('verificationEmail');

      if (storedCode === code && storedEmail === email) {
        // Clear stored verification data
        sessionStorage.removeItem('verificationCode');
        sessionStorage.removeItem('verificationEmail');

        return {
          success: true,
          message: 'Email verified successfully',
        };
      } else {
        return {
          success: false,
          message: 'Invalid verification code',
        };
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      return {
        success: false,
        message: 'Verification failed',
      };
    }
  }

  /**
   * Process complete booking
   */
  async processBooking(bookingData: BookingData): Promise<EmailResponse> {
    try {
      // Validate booking data
      if (!this.validateEmail(bookingData.email)) {
        return {
          success: false,
          message: 'Invalid email address',
        };
      }

      if (bookingData.whatsapp && !this.validatePhone(bookingData.whatsapp)) {
        return {
          success: false,
          message: 'Invalid phone number format',
        };
      }

      // Send booking notification to admin
      const notificationResult = await this.sendBookingNotification(bookingData);
      if (!notificationResult.success) {
        return notificationResult;
      }

      return {
        success: true,
        message: 'Booking request sent successfully',
        bookingId: notificationResult.bookingId,
      };
    } catch (error) {
      console.error('Error processing booking:', error);
      return {
        success: false,
        message: 'Failed to process booking',
      };
    }
  }

  /**
   * Validate email format
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone number format
   */
  validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Generate a unique booking ID
   */
  private generateBookingId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `CC-${timestamp}-${random}`.toUpperCase();
  }

  /**
   * Configure EmailJS settings
   */
  configure(serviceId: string, templateId: string, publicKey: string) {
    this.config = {
      serviceId,
      publicKey,
      templates: this.config.templates,
      adminEmail: this.config.adminEmail,
    };
    emailjs.init(this.config.publicKey);
  }
}

export const emailjsService = new EmailJSService(); 