import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Wifi, Car, Coffee, Utensils, Bed, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/cover-home.jpg";
import restaurantDining from "@/assets/restaurant-dining.jpg";
import restaurantMain from "@/assets/restaurant-main.jpg";
// Superior Double Room images
import superiorDbl1 from "@/assets/superior dbl/IMG_4971.JPG";
// Super Deluxe Family Room images
import superDeluxeFam1 from "@/assets/super deluxe fam/PXL_20240612_055750265.jpg";
import ResponsiveImage from "@/components/ResponsiveImage";

const Home = () => {
  const features = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
    { icon: Car, title: "Free Parking", description: "Complimentary valet service" },
    { icon: Coffee, title: "24/7 Room Service", description: "Always at your service" },
    { icon: Utensils, title: "Fine Dining", description: "World-class cuisine" },
  ];

  const roomTypes = [
    {
      name: "Superior Double Room",
      price: "$68",
      image: superiorDbl1,
      features: ["1 King Bed", "2 Guests", "Free WiFi", "Flat-screen TV", "Private Bathroom", "Mountain View", "Refrigerator", "No Smoking"],
      description: "The spacious double room features air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom boasting a bath. The unit has 1 king size bed.",
    },
    {
      name: "Super Deluxe Family Room",
      price: "$85",
      image: superDeluxeFam1,
      features: ["1 Twin Bed, 1 Full Bed", "3 Guests", "Free WiFi", "Flat-screen TV", "Private Bathroom", "Mountain View", "Refrigerator", "No Smoking"],
      description: "The spacious triple room offers air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom featuring a bath. The unit offers 2 beds - 1 twin bed and 1 full bed.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="mb-4 animate-fade-in">
            <span className="block text-xl sm:text-2xl md:text-3xl font-light tracking-wider mb-1 text-white drop-shadow-lg" style={{ 
              letterSpacing: '0.15em', 
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              fontFamily: "'Cinzel', serif",
              fontStyle: 'normal'
            }}>
              Welcome to
            </span>
            <span className="inline-block text-4xl sm:text-6xl md:text-8xl font-normal tracking-wider text-accent drop-shadow-lg" style={{ 
              letterSpacing: '0.2em', 
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              fontFamily: "'Cinzel', serif",
              fontWeight: '400'
            }}>
              COZY COTTAGE
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 opacity-90 animate-slide-in body-text-light text-white whitespace-nowrap">
            Experience unparalleled comfort and elegance in the heart of Ella city
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in">
            <Button variant="gold" size="lg" className="text-sm sm:text-lg font-semibold px-4 sm:px-8 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild aria-label="Explore Rooms">
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-lg font-semibold px-4 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300" asChild aria-label="Fine Dining">
              <Link to="/restaurant">Fine Dining</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Luxury Amenities
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail crafted for your comfort and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group bg-card border-border">
                <CardContent className="p-4 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold mb-1 text-foreground">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-8 sm:py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Featured Accommodations
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular rooms and suites
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {roomTypes.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border bg-card">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <ResponsiveImage 
                    src={room.image} 
                    alt={room.name + ' photo'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow">
                    {room.price}/night
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{room.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{room.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-300 text-sm" asChild aria-label={`View details for ${room.name}`}>
                    <Link to="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="py-8 sm:py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Culinary Excellence
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground mb-4">
                Experience authentic Sri Lankan dining at its finest, where well-experienced local chefs bring generations of culinary tradition to every dish. Our open dining area creates a warm, welcoming atmosphere perfect for sharing meals with family and friends. Savor the rich complexity of local flavors - from aromatic curries and freshly ground spices to traditional hoppers and kottu roti.
              </p>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base text-foreground">Experienced local chefs</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base text-foreground">Open dining area</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-sm sm:text-base text-foreground">Beers & Wines</span>
                </div>
              </div>
              <Button variant="luxury" size="lg" className="text-sm sm:text-base" asChild aria-label="Explore Menu">
                <Link to="/restaurant">Explore Menu</Link>
              </Button>
            </div>
            <div className="relative">
              <ResponsiveImage 
                src={restaurantMain} 
                alt="Restaurant dining area"
                className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready for Your Perfect Stay?
          </h2>
          <p className="text-sm sm:text-lg mb-6 opacity-90">
            Book now and enjoy exclusive rates and complimentary services
          </p>
          <Button variant="gold" size="lg" className="text-sm sm:text-base" aria-label="Reserve Your Room">
            Reserve Your Room
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;