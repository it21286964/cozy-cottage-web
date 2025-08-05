# EmailJS Setup Guide for Cozy Cottage

This guide will help you set up EmailJS to handle email sending and receiving for the Cozy Cottage booking system without needing a backend server.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from client-side JavaScript without a backend server. It's perfect for simple email functionality like booking confirmations and notifications.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email provider
4. Connect your Gmail account (cozycottage003@gmail.com)
5. Note down your **Service ID** (you'll need this later)

### 3. Create Email Templates

You'll need to create two email templates:

#### Template 1: Booking Notification (Receive Booking Submissions)
- **Template Name**: `booking_notification_template`
- **Subject**: `New Booking Request - Cozy Cottage`
- **Content**:
```html
<h2>New Booking Request</h2>
<p><strong>Customer Name:</strong> {{customer_name}}</p>
<p><strong>Customer Email:</strong> {{customer_email}}</p>
<p><strong>WhatsApp:</strong> {{customer_whatsapp}}</p>
<p><strong>Country:</strong> {{customer_country}}</p>
<p><strong>Check-in:</strong> {{check_in}}</p>
<p><strong>Check-out:</strong> {{check_out}}</p>
<p><strong>Guests:</strong> {{guests}}</p>
<p><strong>Total Price:</strong> {{total_price}}</p>
<p><strong>Rooms:</strong> {{rooms}}</p>
<p><strong>Payment Method:</strong> {{payment_method}}</p>
<p><strong>Special Requests:</strong> {{special_requests}}</p>
<p><strong>Dietary Restrictions:</strong> {{dietary_restrictions}}</p>
<p><strong>Marketing Consent:</strong> {{marketing_consent}}</p>
```

#### Template 2: Email Verification
- **Template Name**: `verification_template`
- **Subject**: `Email Verification - Cozy Cottage`
- **Content**:
```html
<h2>Email Verification</h2>
<p>Your verification code is: <strong>{{verification_code}}</strong></p>
<p>This code will expire in {{expiry_time}}.</p>
<p>If you didn't request this code, please ignore this email.</p>
```

### 4. Get Your EmailJS Credentials

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**
3. Note down your **Service ID** from step 2

### 5. Update Configuration

Update the EmailJS configuration in your project:

#### Option A: Environment Variables (Recommended for production)

Create a `.env` file in the root of your project:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

#### Option B: Direct Configuration

Update `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  PUBLIC_KEY: 'your_public_key_here',
  // ... rest of the config
};
```

### 6. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the booking form and test the email functionality

3. Check your email for test messages

## EmailJS Features

### What EmailJS Can Do:
- ✅ Receive booking submissions (send to admin)
- ✅ Send email verification codes
- ✅ Handle email templates with variables
- ✅ Work without a backend server

### What EmailJS Cannot Do:
- ❌ Receive emails (for that you'd need a backend or email service)
- ❌ Store booking data (you'd need a database)
- ❌ Complex email workflows
- ❌ Email analytics (in the free tier)

## Email Management Without Backend

Since EmailJS only sends emails, here are your options for receiving emails:

### Option 1: Use Gmail Filters
- Set up filters in Gmail to automatically organize booking emails
- Create labels for different types of bookings
- Use Gmail's search functionality to find specific bookings

### Option 2: Use EmailJS Webhooks (Paid Feature)
- EmailJS can send webhooks when emails are received
- This requires a paid plan

### Option 3: Use a Third-Party Email Service
- Services like Zapier, Integromat, or Make.com
- Can forward emails to other services or databases

### Option 4: Simple Gmail Management
- Use Gmail's built-in features:
  - Labels and filters
  - Search and archive
  - Gmail's mobile app for notifications
  - Gmail's API for custom integrations

## Troubleshooting

### Emails Not Sending
1. Check your EmailJS credentials are correct
2. Verify your Gmail account is properly connected
3. Check the browser console for errors
4. Ensure your email templates are set up correctly

### Template Variables Not Working
1. Make sure variable names match exactly
2. Check that variables are being passed correctly
3. Verify template syntax

### CORS Issues
1. EmailJS handles CORS automatically
2. If you see CORS errors, check your EmailJS configuration

## Security Considerations

1. **Public Key Exposure**: EmailJS public keys are safe to expose in client-side code
2. **Rate Limiting**: EmailJS has rate limits on the free plan
3. **Email Validation**: Always validate email addresses before sending
4. **Spam Protection**: Be mindful of sending too many emails to avoid being marked as spam

## Cost Considerations

- **Free Plan**: 200 emails/month
- **Paid Plans**: Start at $15/month for more emails
- **Enterprise**: Custom pricing for high-volume usage

For a small hotel like Cozy Cottage, the free plan should be sufficient for most use cases.

## Next Steps

1. Set up your EmailJS account
2. Create the email templates
3. Update the configuration
4. Test the email functionality
5. Consider implementing email management workflows using Gmail features

This setup will allow you to handle email sending without a backend server while still maintaining professional email communication with your guests. 