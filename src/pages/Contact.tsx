import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            We're here to help you plan your perfect stay. Get in touch with us for reservations, inquiries, or special requests.
          </p>
        </div>

        {/* Contact Information - Mobile Optimized */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-4 sm:p-6">
              {/* Main contact info */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-foreground block sm:inline">Address:</span>
                      <span className="text-muted-foreground block sm:inline sm:ml-2">Near kithal ella railway station, Ella, Sri Lanka</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-foreground block sm:inline">Hotline:</span>
                      <a 
                        href="tel:+94557294800" 
                        className="text-foreground hover:text-accent hover:underline block sm:inline sm:ml-2 text-lg sm:text-base font-medium touch-manipulation"
                      >
                        +94 (55) 729 4800
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-foreground block sm:inline">WhatsApp:</span>
                      <a 
                        href="https://wa.me/94772719172" 
                        className="text-foreground hover:text-accent hover:underline block sm:inline sm:ml-2 text-lg sm:text-base font-medium touch-manipulation" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        +94 (77) 271 9172
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-foreground block sm:inline">Email:</span>
                      <a 
                        href="mailto:cozycottage003@gmail.com" 
                        className="text-foreground hover:text-accent hover:underline block sm:inline sm:ml-2 touch-manipulation break-all sm:break-normal"
                      >
                        cozycottage003@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-foreground block sm:inline">Reception Hours:</span>
                      <span className="text-muted-foreground block sm:inline sm:ml-2">from 7am to 11pm</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile-optimized social media section */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-border">
                <h3 className="text-center font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex justify-center gap-6 sm:gap-8">
                  <a 
                    href="https://wa.me/94772719172" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="WhatsApp"
                    className="touch-manipulation"
                  >
                    <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 text-foreground hover:text-accent transition-colors" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/15nTuqedHo/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook"
                    className="touch-manipulation"
                  >
                    <FaFacebook className="w-8 h-8 sm:w-9 sm:h-9 text-foreground hover:text-accent transition-colors" />
                  </a>
                  <a 
                    href="https://instagram.com/cozycottage.ella" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                    className="touch-manipulation"
                  >
                    <FaInstagram className="w-8 h-8 sm:w-9 sm:h-9 text-foreground hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Actions - Mobile First */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Quick Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="tel:+94557294800" className="touch-manipulation">
              <Button 
                size="lg" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[56px] text-base sm:text-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/94772719172" target="_blank" rel="noopener noreferrer" className="touch-manipulation">
              <Button 
                size="lg" 
                className="w-full bg-green-600 text-white hover:bg-green-700 min-h-[56px] text-base sm:text-lg"
              >
                <FaWhatsapp className="w-5 h-5 mr-3" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Map Section - Mobile Optimized */}
        <section className="mb-12 sm:mb-16">
          <Card className="overflow-hidden shadow-luxury bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                Find Us Here
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64 sm:h-80 lg:h-96 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Near+kithal+ella+railway+station,+Ella,+Sri+Lanka&output=embed"
                  title="Cozy Cottage Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact - Mobile Optimized */}
        <section>
          <Card className="bg-gradient-hero text-primary-foreground text-center overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Need Immediate Assistance?</h3>
              <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                Our reception team is available from 7am to 11pm to help you with any questions or special requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <a href="tel:+94557294800" className="flex-1 touch-manipulation">
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[48px] text-base font-semibold"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="mailto:cozycottage003@gmail.com" className="flex-1 touch-manipulation">
                  <Button 
                    className="w-full bg-white text-black hover:bg-white/90 min-h-[48px] text-base font-semibold"
                    size="lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </a>
              </div>
              
              {/* Additional contact info for mobile */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm opacity-80">
                  Located near Kithal Ella Railway Station<br/>
                  Easy access to Ella's major attractions
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;