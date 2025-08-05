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
  Refrigerator
} from "lucide-react";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import suiteRoom from "@/assets/suite-room.jpg";
import superiorFam5037 from "@/assets/superior fam/IMG_5037.JPG";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import RoomDetailView from "@/components/RoomDetailView";
// Superior Double Room images
import superiorDbl1 from "@/assets/superior dbl/IMG_4971.JPG";
import superiorDbl2 from "@/assets/superior dbl/IMG_4978.JPG";
import superiorDbl3 from "@/assets/superior dbl/IMG_4992.JPG";
import superiorDbl4 from "@/assets/superior dbl/IMG_5008.JPG";
import superiorDbl5 from "@/assets/superior dbl/IMG_5029.JPG";
import superiorDbl6 from "@/assets/superior dbl/IMG_5036.JPG";
import superiorDbl7 from "@/assets/superior dbl/IMG_5037.JPG";
import superiorDbl8 from "@/assets/superior dbl/IMG_5044.JPG";
// Superior Family Room images
import superiorFam1 from "@/assets/superior fam/IMG_4971.JPG";
import superiorFam2 from "@/assets/superior fam/IMG_4978.JPG";
import superiorFam3 from "@/assets/superior fam/IMG_4992.JPG";
import superiorFam4 from "@/assets/superior fam/IMG_5008.JPG";
import superiorFam5 from "@/assets/superior fam/IMG_5029.JPG";
import superiorFam6 from "@/assets/superior fam/IMG_5036.JPG";
import superiorFam7 from "@/assets/superior fam/IMG_5037.JPG";
import superiorFam8 from "@/assets/superior fam/IMG_5044.JPG";
// Deluxe Double Room images
import deluxeDbl1 from "@/assets/deluxe dbl/IMG_4892.JPG";
import deluxeDbl2 from "@/assets/deluxe dbl/IMG_4897.JPG";
import deluxeDbl3 from "@/assets/deluxe dbl/IMG_4902.JPG";
import deluxeDbl4 from "@/assets/deluxe dbl/IMG_4909.JPG";
import deluxeDbl5 from "@/assets/deluxe dbl/IMG_4917.JPG";
import deluxeDbl6 from "@/assets/deluxe dbl/IMG_4921.JPG";
import deluxeDbl7 from "@/assets/deluxe dbl/IMG_4928.JPG";
import deluxeDbl8 from "@/assets/deluxe dbl/IMG_4930(1).JPG";
import deluxeDbl9 from "@/assets/deluxe dbl/IMG_4933.JPG";
import deluxeDbl10 from "@/assets/deluxe dbl/IMG_4935.JPG";
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
      price: 93,
      images: [superiorDbl1, superiorDbl2, superiorDbl3, superiorDbl4, superiorDbl5, superiorDbl6, superiorDbl7, superiorDbl8],
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
      price: 104,
      images: [superiorFam1, superiorFam2, superiorFam3, superiorFam4, superiorFam5, superiorFam6, superiorFam7, superiorFam8],
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
      price: 69,
      images: [deluxeDbl1, deluxeDbl2, deluxeDbl3, deluxeDbl4, deluxeDbl5, deluxeDbl6, deluxeDbl7, deluxeDbl8, deluxeDbl9, deluxeDbl10],
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
      price: 81,
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
      price: 116,
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
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Accommodations
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully designed rooms and suites, each offering unique 
            experiences with luxury amenities and exceptional service.
          </p>
        </div>

        {/* Featured Accommodations */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center">Featured Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-lg border border-accent/30 bg-card">
                <div className="flex flex-col md:flex-row h-full">
                  <img src={room.images[0]} alt={room.name} className="w-full md:w-1/2 h-48 sm:h-64 object-cover" />
                  <div className="p-3 sm:p-4 md:p-6 flex flex-col justify-between flex-1 min-h-[180px] sm:min-h-[200px]">
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg md:text-xl font-semibold mb-2">{room.name}</CardTitle>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-3">{room.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 pt-3 border-t border-border">
                      <span className="text-base sm:text-lg font-semibold text-accent">${room.price}/night</span>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs" onClick={() => setSelectedRoom(room)}>
                          View
                        </Button>
                        <Button variant="luxury" size="sm" className="flex-1 sm:flex-none text-xs" onClick={() => navigate("/book")}>
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="space-y-12">
          {roomCategories.map((room, index) => {
            // Add state for the current image index for each room
            const [selectedIndex, setSelectedIndex] = React.useState(0);
            const carouselApiRef = React.useRef(null);

            // Handler for thumbnail click
            const handleThumbClick = (i) => {
              setSelectedIndex(i);
              if (carouselApiRef.current) {
                carouselApiRef.current.scrollTo(i);
              }
            };

            // Handler to sync selectedIndex with carousel
            const handleSetApi = (api) => {
              carouselApiRef.current = api;
              api.on("select", () => {
                setSelectedIndex(api.selectedScrollSnap());
              });
            };

            return (
              <Card key={room.id} className="overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Main Image Section with Carousel */}
                  <div className={`relative flex flex-col items-center h-auto lg:h-96 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Carousel className="w-full h-80 lg:h-96" opts={{ loop: true, startIndex: selectedIndex }} setApi={handleSetApi}>
                      <CarouselContent>
                        {room.images.map((img, i) => (
                          <CarouselItem key={i} className="h-80 lg:h-96 flex items-center justify-center">
                            <img 
                              src={img} 
                              alt={`${room.name} image ${i+1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4 justify-center">
                      {room.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => handleThumbClick(i)}
                          className={`w-16 h-16 rounded overflow-hidden border-2 ${selectedIndex === i ? 'border-primary' : 'border-transparent'} focus:outline-none`}
                          tabIndex={0}
                          aria-label={`Show image ${i+1} of ${room.name}`}
                        >
                          <img src={img} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <span className="text-3xl font-bold">${room.price}</span>
                      <span className="text-lg opacity-90">/night</span>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl font-bold text-foreground mb-2">
                        {room.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg">
                        {room.description}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0">
                      {/* Room Info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Up to {room.maxGuests} guests
                        </span>
                        <span>•</span>
                        <span>{room.size}</span>
                      </div>
                      {/* Amenities Icons */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {room.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <amenity.icon className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{amenity.label}</span>
                          </div>
                        ))}
                      </div>
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="luxury" size="lg" className="flex-1" onClick={() => navigate("/book")}>
                          Book Now
                        </Button>
                        <Button variant="outline" size="lg" className="flex-1" onClick={() => setSelectedRoom(room)}>
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

        {/* Special Offers */}
      </div>
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