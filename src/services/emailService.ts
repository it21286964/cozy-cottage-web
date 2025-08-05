// Email Service for Booking System
// This service handles email sending for booking confirmations and admin notifications

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

class EmailService {
  private adminEmail = 'cozycottage003@gmail.com';
  private apiEndpoint = '/api/bookings'; // Replace with your actual API endpoint

  /**
   * Send booking confirmation to customer
   */
  async sendCustomerConfirmation(bookingData: BookingData): Promise<EmailResponse> {
    try {
      const response = await fetch(`${this.apiEndpoint}/customer-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Booking confirmation sent successfully',
        bookingId: result.bookingId,
      };
    } catch (error) {
      console.error('Error sending customer confirmation:', error);
      return {
        success: false,
        message: 'Failed to send booking confirmation',
      };
    }
  }

  /**
   * Send booking notification to admin
   */
  async sendAdminNotification(bookingData: BookingData): Promise<EmailResponse> {
    try {
      const response = await fetch(`${this.apiEndpoint}/admin-notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingData,
          adminEmail: this.adminEmail,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Admin notification sent successfully',
        bookingId: result.bookingId,
      };
    } catch (error) {
      console.error('Error sending admin notification:', error);
      return {
        success: false,
        message: 'Failed to send admin notification',
      };
    }
  }

  /**
   * Send email verification code
   */
  async sendVerificationCode(email: string): Promise<EmailResponse> {
    try {
      // Generate a 6-digit verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      const response = await fetch(`${this.apiEndpoint}/send-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          verificationCode,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Store verification code in session storage for demo purposes
      // In production, this should be handled server-side
      sessionStorage.setItem('verificationCode', verificationCode);
      sessionStorage.setItem('verificationEmail', email);

      return {
        success: true,
        message: 'Verification code sent successfully',
      };
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
      // In production, this should be handled server-side
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

      // Send customer confirmation
      const customerResult = await this.sendCustomerConfirmation(bookingData);
      if (!customerResult.success) {
        return customerResult;
      }

      // Send admin notification
      const adminResult = await this.sendAdminNotification(bookingData);
      if (!adminResult.success) {
        return adminResult;
      }

      return {
        success: true,
        message: 'Booking processed successfully',
        bookingId: customerResult.bookingId,
      };
    } catch (error) {
      console.error('Error processing booking:', error);
      return {
        success: false,
        message: 'Failed to process booking',
      };
    }
  }
}

export const emailService = new EmailService(); 