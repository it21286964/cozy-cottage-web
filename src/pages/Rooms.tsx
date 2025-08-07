import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Users, 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Bath, 
  Wind,
  Star,
  CheckCircle,
  Fan,
  Refrigerator,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import superiorFam5037 from "@/assets/superior fam/IMG_5037.JPG";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import RoomDetailView from "@/components/RoomDetailView";
import OptimizedImage from "@/components/OptimizedImage";
import ResponsiveImage from "@/components/ResponsiveImage";
// Superior Double Room images
import superiorDbl1 from "@/assets/superior dbl/IMG_4971.JPG";
import superiorDbl2 from "@/assets/superior dbl/IMG_4978.JPG";
import superiorDbl3 from "@/assets/superior dbl/IMG_5008.JPG";
import superiorDbl4 from "@/assets/superior dbl/IMG_5029.JPG";
import superiorDbl5 from "@/assets/superior dbl/IMG_5036.JPG";
import superiorDbl6 from "@/assets/superior dbl/IMG_5037.JPG";
// Superior Family Room images
import superiorFam1 from "@/assets/superior fam/IMG_4971.JPG";
import superiorFam2 from "@/assets/superior fam/IMG_4978.JPG";
import superiorFam3 from "@/assets/superior fam/IMG_5008.JPG";
import superiorFam4 from "@/assets/superior fam/IMG_5029.JPG";
import superiorFam5 from "@/assets/superior fam/IMG_5036.JPG";
// Deluxe Double Room images
import deluxeDbl1 from "@/assets/deluxe dbl/IMG_4892.JPG";
import deluxeDbl2 from "@/assets/deluxe dbl/IMG_4897.JPG";
import deluxeDbl3 from "@/assets/deluxe dbl/IMG_4902.JPG";
import deluxeDbl4 from "@/assets/deluxe dbl/IMG_4909.JPG";
import deluxeDbl5 from "@/assets/deluxe dbl/IMG_4928.JPG";
import deluxeDbl6 from "@/assets/deluxe dbl/IMG_4933.JPG";
// Super Deluxe Double Room images
import superDeluxeDbl1 from "@/assets/super deluxe dbl/PXL_20240612_060805693~2.jpg";
import superDeluxeDbl2 from "@/assets/super deluxe dbl/PXL_20240612_060943431.jpg";
import superDeluxeDbl3 from "@/assets/super deluxe dbl/PXL_20240612_061333642.jpg";
import superDeluxeDbl4 from "@/assets/super deluxe dbl/PXL_20240612_061633547.jpg";
import superDeluxeDbl5 from "@/assets/super deluxe dbl/PXL_20240612_071820883.jpg";
// Super Deluxe Family Room images
import superDeluxeFam1 from "@/assets/super deluxe fam/PXL_20240612_055750265.jpg";
import superDeluxeFam2 from "@/assets/super deluxe fam/PXL_20240612_055914208.jpg";
import superDeluxeFam3 from "@/assets/super deluxe fam/PXL_20240612_060109439.jpg";
import superDeluxeFam4 from "@/assets/super deluxe fam/PXL_20240612_060316585.jpg";
import superDeluxeFam5 from "@/assets/super deluxe fam/PXL_20240612_071630810.jpg";

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();
  const roomCategories = [
    {
      id: 1,
      name: "Superior Double Room",
      price: 68,
      images: [superiorDbl1, superiorDbl2, superiorDbl3, superiorDbl4, superiorDbl5, superiorDbl6],
      description: "The spacious double room features air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom boasting a bath. The unit has 1 king size bed.",
      maxGuests: 2,
      beds: "1 King Bed",
      size: undefined,
      features: [
        "Free toiletries",
        "Toilet",
        "Bathtub or shower",
        "Hairdryer",
        "Toilet paper",
        "Balcony",
        "Terrace",
        "Mountain view",
        "Landmark view",
        "City view",
        "Dining table",
        "Flat-screen TV",
        "Fan",
        "Towels",
        "Socket near the bed",
        "TV",
        "Refrigerator",
        "Linens",
        "Tile/Marble floor",
        "Private entrance",
        "Electric kettle",
        "Wardrobe or closet",
        "Satellite channels",
        "Air conditioning",
        "No smoking"
      ],
      amenities: [
        { icon: Bed, label: "1 King Bed" },
        { icon: Users, label: "2 Guests" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Flat-screen TV" },
        { icon: Bath, label: "Private Bathroom" },
        { icon: Car, label: "Private Entrance" },
        { icon: Coffee, label: "Electric Kettle" },
        { icon: Star, label: "Mountain View" },
        { icon: Fan, label: "Fan" },
        { icon: Refrigerator, label: "Refrigerator" },
        { icon: CheckCircle, label: "No Smoking" },
      ]
    },
    {
      id: 2,
      name: "Superior Family Room",
      price: 85,
      images: [superiorFam1, superiorFam2, superiorFam3, superiorFam4, superiorFam5],
      description: "The spacious family room provides air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom featuring a bath. The unit offers 2 beds - 1 twin bed and 1 full bed.",
      maxGuests: 3,
      beds: "1 Twin Bed, 1 Full Bed",
      size: undefined,
      features: [
        "Free toiletries",
        "Toilet",
        "Bathtub or shower",
        "Towels",
        "Hairdryer",
        "Toilet paper",
        "Mountain view",
        "Landmark view",
        "City view",
        "Balcony",
        "Terrace",
        "Air conditioning",
        "Linens",
        "Socket near the bed",
        "Tile/Marble floor",
        "Private entrance",
        "TV",
        "Refrigerator",
        "Satellite channels",
        "Flat-screen TV",
        "Fan",
        "Electric kettle",
        "Wardrobe or closet",
        "Dining table",
        "No smoking"
      ],
      amenities: [
        { icon: Bed, label: "1 Twin, 1 Full Bed" },
        { icon: Users, label: "3 Guests" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Flat-screen TV" },
        { icon: Bath, label: "Private Bathroom" },
        { icon: Car, label: "Private Entrance" },
        { icon: Coffee, label: "Electric Kettle" },
        { icon: Star, label: "Mountain View" },
        { icon: Fan, label: "Fan" },
        { icon: Refrigerator, label: "Refrigerator" },
        { icon: CheckCircle, label: "No Smoking" },
      ]
    },
    {
      id: 3,
      name: "Deluxe Double Room",
      price: 52,
      images: [deluxeDbl1, deluxeDbl2, deluxeDbl3, deluxeDbl4, deluxeDbl5, deluxeDbl6],
      description: "The spacious double room offers air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom boasting a bath. The unit has 1 queen bed.",
      maxGuests: 2,
      beds: "1 Queen Bed",
      size: undefined,
      features: [
        "Free toiletries",
        "Toilet",
        "Bathtub or shower",
        "Hairdryer",
        "Toilet paper",
        "Balcony",
        "Terrace",
        "Mountain view",
        "Landmark view",
        "City view",
        "Dining table",
        "Flat-screen TV",
        "Fan",
        "Towels",
        "Socket near the bed",
        "TV",
        "Refrigerator",
        "Linens",
        "Tile/Marble floor",
        "Private entrance",
        "Electric kettle",
        "Wardrobe or closet",
        "Satellite channels",
        "Air conditioning",
        "No smoking"
      ],
      amenities: [
        { icon: Bed, label: "1 Queen Bed" },
        { icon: Users, label: "2 Guests" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Flat-screen TV" },
        { icon: Bath, label: "Private Bathroom" },
        { icon: Car, label: "Private Entrance" },
        { icon: Coffee, label: "Electric Kettle" },
        { icon: Star, label: "Mountain View" },
        { icon: Fan, label: "Fan" },
        { icon: Refrigerator, label: "Refrigerator" },
        { icon: CheckCircle, label: "No Smoking" },
      ]
    },
    {
      id: 4,
      name: "Super Deluxe Double Room",
      price: 60,
      images: [superDeluxeDbl1, superDeluxeDbl2, superDeluxeDbl3, superDeluxeDbl4, superDeluxeDbl5],
      description: "The spacious double room offers air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom boasting a bath. The unit has 1 full bed.",
      maxGuests: 2,
      beds: "1 Full Bed",
      size: undefined,
      features: [
        "Free toiletries",
        "Toilet",
        "Bathtub or shower",
        "Hairdryer",
        "Toilet paper",
        "Balcony",
        "Terrace",
        "Mountain view",
        "Landmark view",
        "City view",
        "Dining table",
        "Flat-screen TV",
        "Fan",
        "Towels",
        "Socket near the bed",
        "TV",
        "Refrigerator",
        "Linens",
        "Tile/Marble floor",
        "Private entrance",
        "Electric kettle",
        "Wardrobe or closet",
        "Satellite channels",
        "Air conditioning",
        "No smoking"
      ],
      amenities: [
        { icon: Bed, label: "1 Full Bed" },
        { icon: Users, label: "2 Guests" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Flat-screen TV" },
        { icon: Bath, label: "Private Bathroom" },
        { icon: Car, label: "Private Entrance" },
        { icon: Coffee, label: "Electric Kettle" },
        { icon: Star, label: "Mountain View" },
        { icon: Fan, label: "Fan" },
        { icon: Refrigerator, label: "Refrigerator" },
        { icon: CheckCircle, label: "No Smoking" },
      ]
    },
    {
      id: 5,
      name: "Super Deluxe Family Room",
      price: 85,
      images: [superDeluxeFam1, superDeluxeFam2, superDeluxeFam3, superDeluxeFam4, superDeluxeFam5],
      description: "The spacious triple room offers air conditioning, a private entrance, a terrace with mountain views as well as a private bathroom featuring a bath. The unit offers 2 beds - 1 twin bed and 1 full bed.",
      maxGuests: 3,
      beds: "1 Twin Bed, 1 Full Bed",
      size: undefined,
      features: [
        "Free toiletries",
        "Toilet",
        "Bathtub or shower",
        "Towels",
        "Hairdryer",
        "Toilet paper",
        "Mountain view",
        "Landmark view",
        "City view",
        "Balcony",
        "Terrace",
        "Air conditioning",
        "Linens",
        "Socket near the bed",
        "Tile/Marble floor",
        "Private entrance",
        "TV",
        "Refrigerator",
        "Satellite channels",
        "Flat-screen TV",
        "Fan",
        "Electric kettle",
        "Wardrobe or closet",
        "Dining table",
        "No smoking"
      ],
      amenities: [
        { icon: Bed, label: "1 Twin, 1 Full Bed" },
        { icon: Users, label: "3 Guests" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Flat-screen TV" },
        { icon: Bath, label: "Private Bathroom" },
        { icon: Car, label: "Private Entrance" },
        { icon: Coffee, label: "Electric Kettle" },
        { icon: Star, label: "Mountain View" },
        { icon: Fan, label: "Fan" },
        { icon: Refrigerator, label: "Refrigerator" },
        { icon: CheckCircle, label: "No Smoking" },
      ]
    },
  ];

  const featuredRooms = [
    roomCategories.find(r => r.name === "Superior Double Room"),
    roomCategories.find(r => r.name === "Deluxe Double Room"),
  ].filter(Boolean);

  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Accommodations
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Choose from our carefully designed rooms and suites, each offering unique 
            experiences with luxury amenities and exceptional service.
          </p>
        </div>

        {/* Featured Accommodations - Mobile Optimized */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center">Featured Accommodations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-lg border border-accent/30 bg-card hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col">
                  {/* Mobile-optimized image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <ResponsiveImage 
                      src={room.images[0]} 
                      alt={room.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ${room.price}/night
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <CardTitle className="text-lg sm:text-xl font-semibold mb-3">{room.name}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3 flex-1 leading-relaxed">
                      {room.description}
                    </p>
                    
                    {/* Quick amenities - mobile optimized */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        {room.beds}
                      </span>
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        {room.maxGuests} Guests
                      </span>
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                        Mountain View
                      </span>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 min-h-[44px]" 
                        onClick={() => setSelectedRoom(room)}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="luxury" 
                        size="sm" 
                        className="flex-1 min-h-[44px]" 
                        onClick={() => navigate("/book")}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Rooms - Mobile Optimized */}
        <div className="space-y-8 sm:space-y-12">
          {roomCategories.map((room, index) => {
            const [selectedIndex, setSelectedIndex] = React.useState(0);
            const carouselApiRef = React.useRef(null);

            const handleThumbClick = (i) => {
              setSelectedIndex(i);
              if (carouselApiRef.current) {
                carouselApiRef.current.scrollTo(i);
              }
            };

            const handleSetApi = (api) => {
              carouselApiRef.current = api;
              api.on("select", () => {
                setSelectedIndex(api.selectedScrollSnap());
              });
            };

            return (
              <Card key={room.id} className="overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500">
                {/* Mobile-first layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Section - Always first on mobile */}
                  <div className="relative flex flex-col items-center">
                    {/* Main carousel */}
                    <Carousel 
                      className="w-full h-64 sm:h-80 lg:h-96" 
                      opts={{ loop: true, startIndex: selectedIndex }} 
                      setApi={handleSetApi}
                    >
                      <CarouselContent>
                        {room.images.map((img, i) => (
                          <CarouselItem key={i} className="h-64 sm:h-80 lg:h-96">
                            <ResponsiveImage 
                              src={img} 
                              alt={`${room.name} image ${i+1}`}
                              className="w-full h-full object-cover"
                              priority={i === 0}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      
                      {/* Mobile-optimized carousel controls */}
                      <div className="absolute left-2 top-1/2 -translate-y-1/2">
                        <button 
                          onClick={() => carouselApiRef.current?.scrollPrev()}
                          className="bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg touch-manipulation"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <button 
                          onClick={() => carouselApiRef.current?.scrollNext()}
                          className="bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg touch-manipulation"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </Carousel>
                    
                    {/* Mobile-optimized thumbnails */}
                    <div className="flex gap-2 mt-3 px-4 overflow-x-auto w-full justify-center pb-2">
                      {room.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => handleThumbClick(i)}
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden border-2 ${
                            selectedIndex === i ? 'border-primary' : 'border-transparent'
                          } focus:outline-none touch-manipulation`}
                          aria-label={`Show image ${i+1} of ${room.name}`}
                        >
                          <OptimizedImage 
                            src={img} 
                            alt={`Thumbnail ${i+1}`} 
                            className="w-full h-full object-cover" 
                          />
                        </button>
                      ))}
                    </div>
                    
                    {/* Price overlay */}
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground rounded-lg px-3 py-2 shadow-lg">
                      <span className="text-2xl sm:text-3xl font-bold">${room.price}</span>
                      <span className="text-sm sm:text-base opacity-90">/night</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4 sm:mb-6">
                      <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                        {room.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        {room.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      {/* Room Info */}
                      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Up to {room.maxGuests} guests
                        </span>
                        <span>•</span>
                        <span>{room.beds}</span>
                      </div>
                      
                      {/* Mobile-optimized amenities grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {room.amenities.slice(0, 6).map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <amenity.icon className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground truncate">{amenity.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Show more amenities on mobile */}
                      {room.amenities.length > 6 && (
                        <div className="mb-6">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setSelectedRoom(room)}
                            className="text-accent hover:text-accent/80 p-0 h-auto text-sm"
                          >
                            +{room.amenities.length - 6} more amenities
                          </Button>
                        </div>
                      )}
                      
                      {/* Mobile-optimized action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button 
                          variant="luxury" 
                          size="lg" 
                          className="flex-1 min-h-[48px] text-base" 
                          onClick={() => navigate("/book")}
                        >
                          Book Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="flex-1 min-h-[48px] text-base" 
                          onClick={() => setSelectedRoom(room)}
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mobile-optimized bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-6 sm:p-8 text-primary-foreground">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Book Your Perfect Stay?
            </h3>
            <p className="text-base sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Experience the comfort and luxury of Cozy Cottage Ella. All rooms feature mountain views, modern amenities, and authentic Sri Lankan hospitality.
            </p>
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full sm:w-auto min-h-[48px] px-8 text-base sm:text-lg"
              onClick={() => navigate("/book")}
            >
              Book Your Room Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailView 
          room={selectedRoom} 
          open={!!selectedRoom} 
          onOpenChange={(open) => !open && setSelectedRoom(null)} 
        />
      )}
    </div>
  );
};

export default Rooms;