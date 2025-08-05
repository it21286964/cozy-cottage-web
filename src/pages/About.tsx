import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Heart, 
  Globe,
  Star,
  Building,
  Shield,
  Leaf
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Exceptional Service",
      description: "We believe every guest deserves personalized attention and care that exceeds expectations."
    },
    {
      icon: Star,
      title: "Luxury & Comfort", 
      description: "Creating spaces that blend elegance with comfort for the ultimate hospitality experience."
    },
    {
      icon: Globe,
      title: "Cultural Heritage",
      description: "Celebrating local culture while providing world-class amenities and international standards."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable tourism practices."
    }
  ];

  const achievements = [
    { icon: Award, title: "5-Star Rating", subtitle: "International Hotel Awards 2023" },
    { icon: Star, title: "Excellence Award", subtitle: "TripAdvisor Travelers' Choice" },
    { icon: Building, title: "Best Architecture", subtitle: "Hospitality Design Awards" },
    { icon: Shield, title: "Safety Certified", subtitle: "Global Safety Standards" },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "General Manager",
      experience: "15+ years",
      specialty: "Luxury hospitality operations"
    },
    {
      name: "Chef Marcus Rivera", 
      position: "Executive Chef",
      experience: "12+ years",
      specialty: "International cuisine & fine dining"
    },
    {
      name: "Emily Chen",
      position: "Guest Relations Director", 
      experience: "10+ years",
      specialty: "Customer experience & VIP services"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-primary text-foreground mb-6">
            About Cozy Cottage Ella
          </h1>
        </div>

        {/* Discover Serenity in the Heart of Ella */}
        <section className="mb-16">
          <h2 className="heading-secondary text-foreground mb-4 text-center">Discover Serenity in the Heart of Ella</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto text-center">
            Nestled in the breathtaking hill country of Sri Lanka, Cozy Cottage Ella offers an enchanting escape where mountain mist meets warm hospitality. Located just 7.5 kilometers from the world-famous Demodara Nine Arch Bridge, this charming 2-star boutique hotel provides the perfect base for exploring Ella's natural wonders while enjoying modern comfort and authentic Sri Lankan charm.
          </p>
        </section>

        {/* Spectacular Mountain Views & Thoughtful Amenities */}
        <section className="mb-16">
          <h2 className="heading-secondary text-foreground mb-4">Spectacular Mountain Views & Thoughtful Amenities</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto mb-4">
            Each thoughtfully designed room at Cozy Cottage Ella features a private balcony with stunning mountain views, allowing guests to wake up to the magnificent panorama of Sri Lanka's central highlands. Our accommodations seamlessly blend comfort with convenience, offering:
          </p>
          <ul className="list-disc pl-8 text-muted-foreground max-w-3xl mx-auto body-text">
            <li>Climate-controlled comfort with air conditioning for year-round relaxation</li>
            <li>Modern entertainment featuring flat-screen TVs with satellite channels</li>
            <li>In-room conveniences including refrigerator, electric kettle, and well-appointed wardrobe</li>
            <li>Luxurious bathrooms complete with bathtub, rainfall shower, hairdryer, and complimentary toiletries</li>
            <li>Dual perspectives with rooms offering both mountain vistas and charming city views</li>
          </ul>
        </section>

        {/* Culinary Excellence & Hospitality */}
        <section className="mb-16">
          <h2 className="heading-secondary text-foreground mb-4">Culinary Excellence & Hospitality</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto">
            Indulge in an exceptional dining experience at our on-site restaurant, where our talented chefs craft a diverse menu featuring both international favorites and authentic Sri Lankan specialties. From hearty rice and curry dishes to fresh seafood preparations, every meal is prepared with locally-sourced ingredients and served with genuine warmth. Our comprehensive room service ensures you can savor these culinary delights in the privacy of your own space.
          </p>
        </section>

        {/* Premium Services & Facilities */}
        <section className="mb-16">
          <h2 className="heading-secondary text-foreground mb-4">Premium Services & Facilities</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto mb-4">Cozy Cottage Ella goes beyond accommodation to provide a complete hospitality experience:</p>
          <ul className="list-disc pl-8 text-muted-foreground max-w-3xl mx-auto body-text">
            <li>Complimentary high-speed WiFi throughout the property</li>
            <li>Beautiful garden spaces perfect for morning coffee or evening relaxation</li>
            <li>Scenic terrace areas ideal for sunset viewing and photography</li>
            <li>Free private parking for guests traveling by car</li>
            <li>Professional room service available for your convenience</li>
          </ul>
        </section>

        {/* Adventure at Your Doorstep */}
        <section className="mb-16">
          <h2 className="heading-secondary text-foreground mb-4">Adventure at Your Doorstep</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto mb-4">
            The hotel's prime location makes it an ideal launching point for exploring Ella's renowned attractions. The area is particularly celebrated for its world-class hiking opportunities, with trails leading through tea plantations, cloud forests, and to spectacular viewpoints like Little Adam's Peak and Ella Rock.
          </p>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto mb-4">For added convenience, we offer:</p>
          <ul className="list-disc pl-8 text-muted-foreground max-w-3xl mx-auto body-text">
            <li>Bicycle rental services for eco-friendly local exploration</li>
            <li>Car rental arrangements for extended sightseeing adventures</li>
            <li>Expert local guidance on the best hiking routes and hidden gems</li>
          </ul>
        </section>

        {/* Gateway to Sri Lanka's Natural Treasures */}
        <section className="mb-16">
          <h2 className="heading-secondary text-foreground mb-4">Gateway to Sri Lanka's Natural Treasures</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto mb-4">From Cozy Cottage Ella, you're perfectly positioned to explore some of Sri Lanka's most celebrated natural attractions:</p>
          <ul className="list-disc pl-8 text-muted-foreground max-w-3xl mx-auto body-text">
            <li>Demodara Nine Arch Bridge (7.5 km) - An architectural marvel set amidst lush greenery</li>
            <li>Hakgala Botanical Garden (46 km) - A spectacular collection of temperate flora</li>
            <li>Horton Plains National Park (46 km) - Home to World's End cliff and Baker's Falls</li>
            <li>Easy airport access with our paid shuttle service to Mattala Rajapaksa International Airport (88 km)</li>
          </ul>
        </section>

        {/* Your Perfect Mountain Getaway Awaits */}
        <section className="mb-20">
          <h2 className="heading-secondary text-foreground mb-4">Your Perfect Mountain Getaway Awaits</h2>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto mb-4">
            Whether you're seeking adventure in the great outdoors, a romantic retreat surrounded by natural beauty, or a peaceful respite from city life, Cozy Cottage Ella offers the perfect blend of comfort, convenience, and authentic Sri Lankan hospitality. Book your stay with us and discover why Ella continues to captivate travelers from around the world.
          </p>
          <p className="body-text text-muted-foreground max-w-3xl mx-auto">
            Experience the magic of Sri Lanka's hill country at Cozy Cottage Ella - where every sunrise brings new possibilities for adventure and every sunset promises tranquil moments of pure bliss.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center p-12 bg-gradient-hero rounded-2xl text-primary-foreground">
          <h3 className="heading-secondary mb-4">
            Experience Our Story
          </h3>
          <p className="body-text opacity-90 mb-8 max-w-2xl mx-auto">
            We invite you to become part of our continuing story of excellence and create your own unforgettable memories with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="body-text">
              Book Your Stay
            </Button>
            <Button variant="outline" size="lg" className="body-text bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;