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
  Calendar
} from "lucide-react";
import restaurantDining from "@/assets/restaurant-dining.jpg";
import restaurantMain from "@/assets/restaurant-main.jpg";

const Restaurant = () => {
  // Replace menuCategories with new Cozy Menu
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
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img 
            src={restaurantMain} 
            alt="Restaurant dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-primary-foreground">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Culinary Excellence
              </h1>
              <p className="text-xl max-w-2xl">
                Experience world-class dining where every dish tells a story of passion and precision
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Menu
            </h2>
          </div>

          <div className="space-y-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-3xl font-bold text-foreground mb-2 text-center">
                  {category.name}
                </h3>
                {category.note && (
                  <p className="text-center text-muted-foreground mb-4 text-sm">{category.note}</p>
                )}
                <ul className="max-w-2xl mx-auto mb-8">
                  {category.dishes.map((dish, dishIndex) => (
                    <li key={dishIndex} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span>{dish.name}</span>
                      <span className="font-semibold">${dish.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Operating Hours */}
          <Card className="hover:shadow-soft transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Clock className="w-6 h-6 text-accent" />
                Operating Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
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
        </div>

        {/* Call to Action */}
        <section className="text-center p-12 bg-gradient-hero rounded-2xl text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Ready for an Unforgettable Dining Experience?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join us for an evening of exceptional cuisine, impeccable service, and memorable moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Reserve Your Table
            </Button>
            <Button variant="hero" size="lg">
              View Wine Menu
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Restaurant;