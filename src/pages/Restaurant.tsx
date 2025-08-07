import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  Star, 
  ChefHat,
  Wine,
  MapPin,
  Phone,
  Calendar,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import restaurantDining from "@/assets/restaurant-dining.jpg";
import restaurantMain from "@/assets/restaurant-main.jpg";
import { useState } from "react";

const Restaurant = () => {
  const [expandedCategories, setExpandedCategories] = useState(new Set([0])); // First category expanded by default
  
  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  const menuCategories = [
    {
      name: "Salads",
      note: "(With Mayonnaise Sauce / Lemon or Lime Dressing)",
      dishes: [
        { name: "Mix Salad", price: 1.33 },
        { name: "Roasted Vegetable Salad", price: 1.67 },
        { name: "Egg & Vegetable Salad", price: 2.00 },
        { name: "Chicken & Vegetable Salad", price: 2.33 },
      ]
    },
    {
      name: "Soup",
      note: "(With Toast Bread & Butter)",
      dishes: [
        { name: "Vegetable Soup", price: 2.00 },
        { name: "Cream of Pumpkin Soup", price: 2.00 },
        { name: "Chicken & Egg Soup", price: 3.00 },
        { name: "Fish Soup", price: 3.00 },
      ]
    },
    {
      name: "Fried Rice",
      note: "(With Chicken Grave or Kirihodi / Vegetable Chopsy / Chili Past / Tomato Sauce / Sweet Chili Sauce)",
      dishes: [
        { name: "Vegetable Fried Rice", price: 2.67 },
        { name: "Egg Fried Rice", price: 3.00 },
        { name: "Chicken Fried Rice", price: 3.67 },
        { name: "Fish Fried Rice", price: 4.00 },
        { name: "Sea Food Fried Rice", price: 4.67 },
        { name: "Mix Fried Rice", price: 5.00 },
      ]
    },
    {
      name: "Noodles",
      note: "(With Chicken Grave or Kirihodi / Chili Past / Tomato Sauce)",
      dishes: [
        { name: "Vegetable Noodles", price: 2.00 },
        { name: "Egg Noodles", price: 2.33 },
        { name: "Chicken Noodles", price: 3.00 },
        { name: "Fish Noodles", price: 3.33 },
        { name: "Sea Food Noodles", price: 4.33 },
        { name: "Mix Noodles", price: 4.67 },
      ]
    },
    {
      name: "Kottu",
      note: "(With Chicken Grave or Kirihodi / Chili Past / Tomato Sauce)",
      dishes: [
        { name: "Vegetable Kottu", price: 2.00 },
        { name: "Egg Kottu", price: 2.33 },
        { name: "Chicken Kottu", price: 3.00 },
        { name: "Fish Kottu", price: 3.33 },
        { name: "Sea Food Kottu", price: 4.33 },
        { name: "Mix Kottu", price: 4.67 },
      ]
    },
    {
      name: "Cheese Kottu",
      note: "(With Chicken Grave or Kirihodi / Chili Past / Tomato Sauce)",
      dishes: [
        { name: "Cheese Kottu", price: 3.00 },
        { name: "Egg Cheese Kottu", price: 3.33 },
        { name: "Chicken Cheese Kottu", price: 3.67 },
        { name: "Sea Food Cheese Kottu", price: 5.00 },
        { name: "Mix Cheese Kottu", price: 5.33 },
      ]
    },
    {
      name: "Nasigoran",
      note: "(With Chicken Grave or Kirihodi / Chili Past / Fried Egg)",
      dishes: [
        { name: "Egg Nasigoran", price: 3.33 },
        { name: "Chicken Nasigoran", price: 4.00 },
        { name: "Sea Nasigoran", price: 5.00 },
      ]
    },
    {
      name: "Rice & Curry",
      note: "(With This Three Curries / Mango Chutney / Papadam)",
      dishes: [
        { name: "Vegetable Rice & Curry", price: 2.67 },
        { name: "Egg Rice & Curry", price: 3.00 },
        { name: "Chicken Rice & Curry", price: 3.67 },
        { name: "Fish Rice & Curry", price: 3.67 },
      ]
    },
    {
      name: "Bread With Curry",
      note: "(With Dhall or Potato Curry / Pol Sambal or Pol Mallum)",
      dishes: [
        { name: "Vegetable Curry", price: 2.67 },
        { name: "Egg Curry", price: 3.00 },
        { name: "Chicken Curry", price: 3.67 },
        { name: "Fish Curry", price: 3.67 },
      ]
    },
    {
      name: "Pasta",
      note: "(With Tomato Sauce / Chili Past)",
      dishes: [
        { name: "Vegetable Pasta", price: 2.33 },
        { name: "Cheese Pasta", price: 3.33 },
        { name: "Chicken Pasta", price: 3.67 },
      ]
    },
    {
      name: "Chicken",
      dishes: [
        { name: "Grill Chicken", price: 7.33, note: "(With Butter Vegetable / French Fried / Tomato Sauce)" },
        { name: "Crumpled Fried Chicken", price: 7.33, note: "(With Grill Potato / Boiled Vegetable / Tomato Sauce)" },
        { name: "Chicken Piccata", price: 7.33, note: "(With Creamy Vegetable / Boiled Cabbage / Tomato Sauce)" },
        { name: "Honey Lime Chicken", price: 7.67, note: "(With Grill Vegetable / Garlic Rice / Tomato Sauce)" },
      ]
    },
    {
      name: "Fish",
      dishes: [
        { name: "Porch Fish", price: 7.33, note: "(With Grill Vegetable / Creamy Potato / Tomato Sauce)" },
        { name: "Batter Fried Fish", price: 7.67, note: "(With Boiled Vegetable / Mash Potato / Tomato Sauce)" },
        { name: "Sweet & Sour Fish", price: 7.67, note: "(With Mix Salad / Yellow Rice / Tomato Sauce)" },
      ]
    },
    {
      name: "Sandwich",
      note: "(With French Fried / Tomato Sauce / Sweet Chili Sauce)",
      dishes: [
        { name: "Vegetable Sandwich", price: 2.67 },
        { name: "Egg Sandwich", price: 3.00 },
        { name: "Chicken Sandwich", price: 3.33 },
        { name: "Cheese Sandwich", price: 3.67 },
      ]
    },
    {
      name: "Bite Plates",
      dishes: [
        { name: "Vegetable Pakora Plate", price: 1.67 },
        { name: "Spicy Omelet Plate", price: 1.67 },
        { name: "Fried Sausage Plate", price: 2.33 },
        { name: "Deviled Sausage Plate", price: 2.67 },
        { name: "Batter Fried Chicken Plate", price: 2.67 },
        { name: "Deviled Chicken Plate", price: 3.00 },
        { name: "French Fried Plate", price: 3.33 },
        { name: "Black Pork Curry Plate", price: 4.33 },
        { name: "Black Beef Curry Plate", price: 4.33 },
        { name: "Deviled Pork Plate", price: 4.67 },
        { name: "Savory Beef & Vegetable Stir-fry", price: 5.00 },
        { name: "Sea Food Kebab Plate", price: 5.00 },
        { name: "Mix Sea Food Plate", price: 6.67 },
      ]
    },
    {
      name: "Juice",
      dishes: [
        { name: "Water Melon Juice", price: 1.33 },
        { name: "Papaya Juice", price: 1.33 },
        { name: "Lime Juice", price: 1.33 },
        { name: "Banana Milk Shake", price: 1.67 },
        { name: "Chocolate Milk Shake", price: 1.67 },
      ]
    },
    {
      name: "Dessert",
      dishes: [
        { name: "Banana Fritters", price: 1.00 },
        { name: "Yogurt With Honey", price: 1.00 },
        { name: "Ice-Cream", price: 1.00 },
        { name: "Fresh Fruit Plate", price: 1.00 },
        { name: "Mix Fruit Salad", price: 1.33 },
      ]
    },
  ];

  const operatingHours = [
    { day: "Monday - Sunday", hours: "8:30 AM - 9:30 PM" },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12 sm:mb-16">
          <img 
            src={restaurantMain} 
            alt="Restaurant dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-primary-foreground p-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Culinary Excellence
              </h1>
              <p className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Experience world-class dining where every dish tells a story of passion and precision
              </p>
            </div>
          </div>
        </section>

        {/* Restaurant Features - Mobile First */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="text-center p-4 bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <ChefHat className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Local Chefs</h3>
              <p className="text-sm text-muted-foreground">Authentic Sri Lankan cuisine</p>
            </Card>
            
            <Card className="text-center p-4 bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Open Dining</h3>
              <p className="text-sm text-muted-foreground">Warm, welcoming atmosphere</p>
            </Card>
            
            <Card className="text-center p-4 bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wine className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Beers & Wines</h3>
              <p className="text-sm text-muted-foreground">Curated beverage selection</p>
            </Card>
            
            <Card className="text-center p-4 bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Daily Service</h3>
              <p className="text-sm text-muted-foreground">8:30 AM - 9:30 PM</p>
            </Card>
          </div>
        </section>

        {/* Menu Section - Mobile Optimized with Accordion */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Menu
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover authentic Sri Lankan flavors and international favorites
            </p>
          </div>

          {/* Mobile-first accordion menu */}
          <div className="space-y-4">
            {menuCategories.map((category, categoryIndex) => {
              const isExpanded = expandedCategories.has(categoryIndex);
              return (
                <Card key={categoryIndex} className="overflow-hidden bg-card border-border">
                  <button
                    onClick={() => toggleCategory(categoryIndex)}
                    className="w-full p-4 sm:p-6 text-left hover:bg-muted/50 transition-colors touch-manipulation"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1">
                          {category.name}
                        </h3>
                        {category.note && (
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                            {category.note}
                          </p>
                        )}
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        ) : (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="border-t border-border">
                      <div className="p-4 sm:p-6 pt-4">
                        <div className="space-y-3">
                          {category.dishes.map((dish, dishIndex) => (
                            <div key={dishIndex} className="flex items-start justify-between gap-4 py-2">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground text-sm sm:text-base">
                                  {dish.name}
                                </h4>
                                {dish.note && (
                                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                                    {dish.note}
                                  </p>
                                )}
                              </div>
                              <div className="flex-shrink-0">
                                <span className="font-bold text-accent text-base sm:text-lg">
                                  ${dish.price.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
          
          {/* Expand/Collapse All - Mobile Helper */}
          <div className="text-center mt-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => setExpandedCategories(new Set(Array.from({length: menuCategories.length}, (_, i) => i)))}
                className="min-h-[44px] touch-manipulation"
              >
                Expand All Categories
              </Button>
              <Button
                variant="outline"
                onClick={() => setExpandedCategories(new Set())}
                className="min-h-[44px] touch-manipulation"
              >
                Collapse All
              </Button>
            </div>
          </div>
        </section>

        {/* Operating Hours - Mobile Optimized */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground text-lg font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Last orders taken 30 minutes before closing
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Restaurant Image - Mobile Optimized */}
            <Card className="overflow-hidden">
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[280px]">
                <img 
                  src={restaurantDining} 
                  alt="Restaurant dining experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Dining Experience</h3>
                  <p className="text-sm sm:text-base opacity-90">Authentic Sri Lankan hospitality</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action - Mobile Optimized */}
        <section className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-hero rounded-2xl text-primary-foreground">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready for an Unforgettable Dining Experience?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us for an evening of exceptional cuisine, impeccable service, and memorable moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              variant="gold" 
              size="lg"
              className="w-full sm:flex-1 min-h-[48px] text-base sm:text-lg"
            >
              Reserve Table
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              className="w-full sm:flex-1 min-h-[48px] text-base sm:text-lg"
            >
              View Beverages
            </Button>
          </div>
          
          {/* Contact info for reservations */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm opacity-80 mb-3">For reservations, call us at:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="tel:+94557294800" 
                className="text-white hover:text-accent text-lg font-semibold touch-manipulation"
              >
                +94 (55) 729 4800
              </a>
              <span className="hidden sm:inline text-white/60">•</span>
              <a 
                href="https://wa.me/94772719172" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent text-lg font-semibold touch-manipulation"
              >
                WhatsApp: +94 (77) 271 9172
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Restaurant;