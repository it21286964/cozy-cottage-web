// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: 'service_kjjocoi',
  
  // Your EmailJS Public Key
  PUBLIC_KEY: 'DA-ju0Tkahns2j6YR',
  
  // Template IDs for different email types
  TEMPLATES: {
    // Template for receiving booking submissions
    BOOKING_NOTIFICATION: 'template_2wnbfyo',
    
    // Template for email verification
    VERIFICATION: 'template_xm1uphq',
  },
  
  // Admin email address
  ADMIN_EMAIL: 'cozycottage003@gmail.com',
};

// EmailJS Service Configuration
export const configureEmailJS = () => {
  // You can set these values from environment variables in production
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY;
  
  return {
    serviceId,
    publicKey,
    templates: EMAILJS_CONFIG.TEMPLATES,
    adminEmail: EMAILJS_CONFIG.ADMIN_EMAIL,
  };
}; 