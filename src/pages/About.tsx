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
  Leaf,
  Quote
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

  const guestReviews = [
    {
      rating: 5,
      title: "Perfect location and amazing staff",
      review: "Perfect location close to Ella and its amenities but also a welcome escape from the noise and activity. The staff were amazing and cannot do enough for you. Our room was large, the most spacious we have enjoyed in our three weeks in Sri Lanka.",
      author: "Travel Couple",
      date: "February 2024",
      tripType: "Couple's Getaway"
    },
    {
      rating: 5,
      title: "Most wonderful and delightful place",
      review: "We recently stayed at Ella Cozy Cottage and it was absolutely perfect. We loved every moment of our stay. The room was very spacious and the bathroom was also large. Both were impeccably clean and extremely comfortable.",
      author: "Honeymoon Couple",
      date: "May 2024",
      tripType: "Honeymoon"
    },
    {
      rating: 5,
      title: "Stunning views and excellent hospitality",
      review: "The place is simply fantastic, a 360 degree view of the surrounding mountains, very beautiful even at sunset and sunrise. The room was very spacious and equipped with every comfort with a huge balcony.",
      author: "Adventure Travelers",
      date: "August 2023",
      tripType: "Friends Trip"
    },
    {
      rating: 5,
      title: "Amazing place for meditation and focus",
      review: "I am a digital nomad based in Sri Lanka. I came to this amazing place with my family for two nights. Really after living next to beach this place really helped me to improve my focus with meditation.",
      author: "Digital Nomad Family",
      date: "October 2022",
      tripType: "Family Stay"
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            About Cozy Cottage Ella
          </h1>
        </div>

        {/* Discover Serenity Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center px-4">
            Discover Serenity in the Heart of Ella
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed px-4">
            Nestled in the breathtaking hill country of Sri Lanka, Cozy Cottage Ella offers an enchanting escape where mountain mist meets warm hospitality. Located just 7.5 kilometers from the world-famous Demodara Nine Arch Bridge, this charming 2-star boutique hotel provides the perfect base for exploring Ella's natural wonders while enjoying modern comfort and authentic Sri Lankan charm.
          </p>
        </section>

        {/* Mountain Views & Amenities */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Spectacular Mountain Views & Thoughtful Amenities
          </h2>
          <div className="space-y-4 sm:space-y-6 px-4">
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Each thoughtfully designed room at Cozy Cottage Ella features a private balcony with stunning mountain views, allowing guests to wake up to the magnificent panorama of Sri Lanka's central highlands. Our accommodations seamlessly blend comfort with convenience, offering:
            </p>
            <div className="bg-muted/30 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Climate-controlled comfort with air conditioning for year-round relaxation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Modern entertainment featuring flat-screen TVs with satellite channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>In-room conveniences including refrigerator, electric kettle, and well-appointed wardrobe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Luxurious bathrooms complete with bathtub, rainfall shower, hairdryer, and complimentary toiletries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dual perspectives with rooms offering both mountain vistas and charming city views</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Culinary Excellence */}
        <section className="mb-12 sm:mb-16 px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Culinary Excellence & Hospitality
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Indulge in an exceptional dining experience at our on-site restaurant, where our talented chefs craft a diverse menu featuring both international favorites and authentic Sri Lankan specialties. From hearty rice and curry dishes to fresh seafood preparations, every meal is prepared with locally-sourced ingredients and served with genuine warmth.
          </p>
        </section>

        {/* Premium Services */}
        <section className="mb-12 sm:mb-16 px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Premium Services & Facilities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed">
            Cozy Cottage Ella goes beyond accommodation to provide a complete hospitality experience:
          </p>
          <div className="bg-muted/30 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Complimentary high-speed WiFi throughout the property</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Beautiful garden spaces perfect for morning coffee or evening relaxation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Scenic terrace areas ideal for sunset viewing and photography</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Free private parking for guests traveling by car</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Professional room service available for your convenience</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Adventure Section */}
        <section className="mb-12 sm:mb-16 px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Adventure at Your Doorstep
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The hotel's prime location makes it an ideal launching point for exploring Ella's renowned attractions. The area is particularly celebrated for its world-class hiking opportunities, with trails leading through tea plantations, cloud forests, and to spectacular viewpoints like Little Adam's Peak and Ella Rock.
            </p>
            <div className="bg-muted/30 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
              <p className="text-base font-medium text-foreground mb-3">For added convenience, we offer:</p>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Bicycle rental services for eco-friendly local exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Car rental arrangements for extended sightseeing adventures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Expert local guidance on the best hiking routes and hidden gems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Natural Treasures */}
        <section className="mb-12 sm:mb-16 px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Gateway to Sri Lanka's Natural Treasures
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed">
            From Cozy Cottage Ella, you're perfectly positioned to explore some of Sri Lanka's most celebrated natural attractions:
          </p>
          <div className="bg-muted/30 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-foreground">Demodara Nine Arch Bridge (7.5 km)</span>
                  <span className="block text-sm">An architectural marvel set amidst lush greenery</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-foreground">Hakgala Botanical Garden (46 km)</span>
                  <span className="block text-sm">A spectacular collection of temperate flora</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-foreground">Horton Plains National Park (46 km)</span>
                  <span className="block text-sm">Home to World's End cliff and Baker's Falls</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-foreground">Airport Shuttle Service</span>
                  <span className="block text-sm">Paid shuttle service to Mattala Rajapaksa International Airport (88 km)</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Guest Reviews Section - Mobile Optimized */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover why travelers from around the world choose Cozy Cottage Ella for their unforgettable Sri Lankan adventure
            </p>
          </div>
          
          {/* Mobile-optimized review grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {guestReviews.map((review, index) => (
              <Card key={index} className="p-4 sm:p-6 border-muted hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs w-fit">
                      {review.tripType}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary/20 mb-2" />
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">{review.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{review.review}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="font-medium">{review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile-optimized rating summary */}
          <div className="text-center mt-8 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground text-lg sm:text-xl">4.8/5</span>
              <span className="text-muted-foreground text-sm sm:text-base">• Based on TripAdvisor reviews</span>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200 text-sm sm:text-base px-3 py-2">
              <Award className="w-4 h-4 mr-2" />
              TripAdvisor Travelers' Choice Award Winner
            </Badge>
          </div>
        </section>

        {/* Perfect Getaway Section */}
        <section className="mb-16 sm:mb-20 px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Your Perfect Mountain Getaway Awaits
          </h2>
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you're seeking adventure in the great outdoors, a romantic retreat surrounded by natural beauty, or a peaceful respite from city life, Cozy Cottage Ella offers the perfect blend of comfort, convenience, and authentic Sri Lankan hospitality.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Experience the magic of Sri Lanka's hill country at Cozy Cottage Ella - where every sunrise brings new possibilities for adventure and every sunset promises tranquil moments of pure bliss.
            </p>
          </div>
        </section>

        {/* Call to Action - Mobile Optimized */}
        <section className="text-center p-6 sm:p-12 bg-gradient-hero rounded-2xl text-primary-foreground mx-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Experience Our Story
          </h3>
          <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            We invite you to become part of our continuing story of excellence and create your own unforgettable memories with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gold" 
              size="lg" 
              className="text-base sm:text-lg w-full sm:w-auto min-h-[48px] px-8"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 w-full sm:w-auto min-h-[48px] px-8"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;