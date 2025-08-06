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
      review: "Perfect location close to Ella and its amenities but also a welcome escape from the noise and activity. The staff were amazing and cannot do enough for you. Our room was large, the most spacious we have enjoyed in our three weeks in Sri Lanka. The room had a fantastic large balcony overlooking the town and is a welcome retreat during the day.",
      author: "Travel Couple",
      date: "February 2024",
      tripType: "Couple's Getaway"
    },
    {
      rating: 5,
      title: "Most wonderful and delightful place",
      review: "We recently stayed at Ella Cozy Cottage and it was absolutely perfect. We loved every moment of our stay. The room was very spacious and the bathroom was also large. Both were impeccably clean and extremely comfortable, providing excellent value for the price. The environment and the view were superb, offering a calm and peaceful retreat.",
      author: "Honeymoon Couple",
      date: "May 2024",
      tripType: "Honeymoon"
    },
    {
      rating: 5,
      title: "Stunning views and excellent hospitality",
      review: "The place is simply fantastic, a 360 degree view of the surrounding mountains, very beautiful even at sunset and sunrise. The room was very spacious and equipped with every comfort with a huge balcony where you can completely relax surrounded by nature. Abundant and refined breakfast.",
      author: "Adventure Travelers",
      date: "August 2023",
      tripType: "Friends Trip"
    },
    {
      rating: 5,
      title: "Amazing place for meditation and focus",
      review: "I am a digital nomad based in Sri Lanka. I came to this amazing place with my family for two nights. Really after living next to beach this place really helped me to improve my focus with meditation. I highly recommend this place if you are visiting to Ella. Love the hospitality 😍😇",
      author: "Digital Nomad Family",
      date: "October 2022",
      tripType: "Family Stay"
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

        {/* Guest Reviews Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-foreground mb-4">What Our Guests Say</h2>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto">
              Discover why travelers from around the world choose Cozy Cottage Ella for their unforgettable Sri Lankan adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {guestReviews.map((review, index) => (
              <Card key={index} className="p-6 border-muted">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center gap-1 mr-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {review.tripType}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-primary/20 mb-2" />
                    <h3 className="font-semibold text-foreground mb-2">{review.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{review.review}</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="font-medium">{review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.8/5</span>
              <span className="text-muted-foreground">• Based on TripAdvisor reviews</span>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <Award className="w-4 h-4 mr-2" />
              TripAdvisor Travelers' Choice Award Winner
            </Badge>
          </div>
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