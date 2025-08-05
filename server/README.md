# Cozy Cottage Backend Server

This is the backend API server for the Cozy Cottage booking system. It handles email sending, booking management, and user validation.

## Features

- **Email Verification**: Send and verify email codes for user validation
- **Booking Management**: Process booking requests and send confirmations
- **Admin Notifications**: Send booking notifications to admin email
- **Rate Limiting**: Protect against spam and abuse
- **Input Validation**: Comprehensive validation using express-validator
- **Security**: Helmet.js for security headers and CORS protection

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Configuration

Create a `.env` file in the server directory with the following variables:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration (Gmail)
EMAIL_USER=cozycottage003@gmail.com
EMAIL_PASS=your_app_password_here

# Admin Email
ADMIN_EMAIL=cozycottage003@gmail.com

# JWT Secret (for future authentication)
JWT_SECRET=your_jwt_secret_here
```

### 3. Gmail App Password Setup

To use Gmail for sending emails, you need to:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in the `EMAIL_PASS` environment variable

### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Email Verification
- `POST /api/bookings/send-verification` - Send verification code
- `POST /api/bookings/verify-code` - Verify email code

### Booking Management
- `POST /api/bookings/customer-confirmation` - Send customer confirmation
- `POST /api/bookings/admin-notification` - Send admin notification
- `GET /api/bookings` - Get all bookings (admin)
- `PATCH /api/bookings/:id/status` - Update booking status

## Email Templates

The server sends professionally formatted HTML emails for:

1. **Email Verification**: 6-digit code with expiration
2. **Customer Confirmation**: Booking details and next steps
3. **Admin Notification**: Complete booking information

## Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: Comprehensive validation on all endpoints
- **CORS Protection**: Configured for frontend domain
- **Helmet.js**: Security headers
- **Error Handling**: Proper error responses

## Development Notes

- Uses in-memory storage for demo purposes
- In production, implement a proper database (PostgreSQL, MongoDB, etc.)
- Add authentication middleware for admin endpoints
- Implement logging and monitoring
- Add automated tests

## Troubleshooting

### Email Not Sending
1. Check Gmail app password is correct
2. Ensure 2FA is enabled on Gmail account
3. Check firewall/network settings
4. Verify environment variables are set correctly

### CORS Errors
1. Ensure `FRONTEND_URL` is set correctly
2. Check that frontend is running on the correct port
3. Verify CORS configuration in server.js

### Validation Errors
1. Check request body format
2. Ensure all required fields are provided
3. Verify email format and date formats 