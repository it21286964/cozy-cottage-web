import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Users, 
  Wifi, 
  Tv, 
  Bath, 
  Star,
  CheckCircle,
  Fan,
  Refrigerator,
  Coffee,
  Car,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface RoomDetailViewProps {
  room: {
    id: number;
    name: string;
    price: number;
    images: string[];
    description: string;
    maxGuests: number;
    beds: string;
    size?: string;
    features: string[];
    amenities: Array<{ icon: any; label: string }>;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RoomDetailView = ({ room, open, onOpenChange }: RoomDetailViewProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const bathroomFeatures = room.features.filter(feature => 
    feature.toLowerCase().includes('toilet') || 
    feature.toLowerCase().includes('bath') || 
    feature.toLowerCase().includes('shower') ||
    feature.toLowerCase().includes('hair') ||
    feature.toLowerCase().includes('toiletries')
  );

  const viewFeatures = room.features.filter(feature => 
    feature.toLowerCase().includes('view') || 
    feature.toLowerCase().includes('balcony') || 
    feature.toLowerCase().includes('terrace')
  );

  const roomFacilities = room.features.filter(feature => 
    !bathroomFeatures.includes(feature) && 
    !viewFeatures.includes(feature) &&
    !feature.toLowerCase().includes('smoking')
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="heading-primary text-foreground">{room.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <img 
                src={room.images[selectedImageIndex]} 
                alt={`${room.name} - Image ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-16 rounded overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index 
                      ? 'border-accent' 
                      : 'border-transparent hover:border-accent/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Room Details */}
          <div className="space-y-6">
            {/* Key Features */}
            <div className="flex flex-wrap gap-2">
              {room.size && <Badge variant="secondary">{room.size}</Badge>}
              {viewFeatures.map((feature, index) => (
                <Badge key={index} variant="outline">{feature}</Badge>
              ))}
              <Badge variant="outline">Air conditioning</Badge>
              <Badge variant="outline">Private bathroom</Badge>
              <Badge variant="outline">Flat-screen TV</Badge>
              <Badge variant="outline">Terrace</Badge>
              <Badge variant="outline">Free Wifi</Badge>
            </div>

            {/* Room Size and Bed Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-accent" />
                <span className="body-text">{room.beds}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="body-text">Up to {room.maxGuests} guests</span>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="body-text-light">Comfy beds, 9 – Based on 97 reviews</span>
            </div>

            {/* Room Description */}
            <div>
              <h3 className="heading-tertiary mb-2">Room Description</h3>
              <p className="body-text text-muted-foreground">{room.description}</p>
            </div>

            {/* Detailed Information */}
            <div className="space-y-4">
              {/* In your private bathroom */}
              {bathroomFeatures.length > 0 && (
                <div>
                  <h4 className="heading-tertiary mb-2">In your private bathroom:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {bathroomFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="body-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View */}
              {viewFeatures.length > 0 && (
                <div>
                  <h4 className="heading-tertiary mb-2">View:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {viewFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="body-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Room Facilities */}
              <div>
                <h4 className="heading-tertiary mb-2">Room Facilities:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {roomFacilities.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="body-text-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Smoking Policy */}
              <div>
                <h4 className="heading-tertiary mb-2">Smoking Policy:</h4>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  <span className="body-text-light">No smoking</span>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <Card className="bg-muted/30 border-border">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="heading-tertiary">{room.name}</span>
                    <span className="heading-secondary">${room.price}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="body-text-light">Free cancellation before November 9, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="body-text-light">No prepayment needed – pay at the property</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="body-text-light">Breakfast included in the price</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-accent" />
                    <span className="body-text-light">{room.beds}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="heading-secondary">${room.price} for 1 night</span>
                    <Button variant="gold" size="lg" className="body-text">
                      Reserve
                    </Button>
                  </div>
                  <div className="text-center text-xs text-muted-foreground">
                    It only takes 2 minutes • You won't be charged yet
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomDetailView; 