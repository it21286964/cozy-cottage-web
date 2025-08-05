import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-primary text-foreground mb-6">Contact Us</h1>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            We're here to help you plan your perfect stay. Get in touch with us for reservations, inquiries, or special requests.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 mb-16">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Address:</span>
                  <span className="text-muted-foreground">Near kithal ella railway station, Ella, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Hotline:</span>
                  <a href="tel:+94557294800" className="text-foreground hover:text-accent hover:underline">+94 (55) 729 4800</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">WhatsApp:</span>
                  <a href="https://wa.me/94772719172" className="text-foreground hover:text-accent hover:underline" target="_blank" rel="noopener noreferrer">+94 (77) 271 9172</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Email:</span>
                  <a href="mailto:cozycottage003@gmail.com" className="text-foreground hover:text-accent hover:underline">cozycottage003@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-foreground">Reception Hours:</span>
                  <span className="text-muted-foreground">from 7am to 11pm</span>
                </div>
              </div>
              {/* Social Icons Row */}
              <div className="flex justify-center gap-8 mt-8">
                <a href="https://wa.me/94772719172" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp className="w-7 h-7 text-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://www.facebook.com/share/15nTuqedHo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="w-7 h-7 text-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://instagram.com/cozycottage.ella" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="w-7 h-7 text-foreground hover:text-accent transition-colors" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <Card className="overflow-hidden shadow-luxury bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 heading-secondary">
                <Navigation className="w-6 h-6 text-accent" />
                Location Map
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Near+kithal+ella+railway+station,+Ella,+Sri+Lanka&output=embed"
                  title="Cozy Cottage Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="bg-gradient-hero text-primary-foreground text-center">
            <CardContent className="p-12">
              <h3 className="heading-secondary mb-4">Need Immediate Assistance?</h3>
              <p className="body-text opacity-90 mb-6">
                Our reception team is available from 7am to 11pm to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+94557294800">
                  <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/90 transition-colors">
                    <Phone className="w-4 h-4" />
                    Call Now: +94 (55) 729 4800
                  </button>
                </a>
                <a href="mailto:cozycottage003@gmail.com">
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 border border-accent hover:bg-accent/10 transition-colors">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;