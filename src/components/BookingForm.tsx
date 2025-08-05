import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays, differenceInDays, isAfter, isBefore, startOfDay } from "date-fns";
import { Mail, Phone, User, MapPin, Calendar as CalendarIcon, CreditCard, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { emailjsService } from "@/services/emailjsService";

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().optional(),
  country: z.string().min(2, "Please enter your country"),
  checkIn: z.date({
    required_error: "Please select a check-in date",
  }).refine((date) => isAfter(date, startOfDay(new Date())), {
    message: "Check-in date must be in the future",
  }),
  checkOut: z.date({
    required_error: "Please select a check-out date",
  }),
  guests: z.number().min(1, "At least 1 guest required"),
  specialRequests: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  paymentMethod: z.enum(["card", "cash", "bank_transfer"]),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  marketingConsent: z.boolean().optional(),
}).refine((data) => {
  if (data.checkIn && data.checkOut) {
    return isAfter(data.checkOut, data.checkIn);
  }
  return true;
}, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"],
});

const ROOM_TYPES = [
  { name: "Superior Double Room", occupancy: 2, price: 93, description: "King bed, mountain view, private bathroom" },
  { name: "Superior Family Room", occupancy: 3, price: 116, description: "Twin + Full bed, mountain view, private bathroom" },
  { name: "Deluxe Double Room", occupancy: 2, price: 105, description: "King bed, premium amenities, balcony" },
  { name: "Super Deluxe Double Room", occupancy: 2, price: 125, description: "King bed, luxury amenities, private terrace" },
  { name: "Super Deluxe Family Room", occupancy: 3, price: 145, description: "Twin + Full bed, luxury amenities, private terrace" },
];

const PAYMENT_METHODS = [
  { value: "card", label: "Credit/Debit Card", icon: CreditCard },
  { value: "cash", label: "Cash on Arrival", icon: User },
  { value: "bank_transfer", label: "Bank Transfer", icon: CreditCard },
];

interface BookingFormProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  standalone?: boolean;
}

export default function BookingForm({ open, onOpenChange, standalone }: BookingFormProps) {
  const [roomCounts, setRoomCounts] = useState(ROOM_TYPES.map(() => 0));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      country: "",
      checkIn: null,
      checkOut: null,
      guests: 1,
      specialRequests: "",
      dietaryRestrictions: "",
      paymentMethod: "card",
      termsAccepted: false,
      marketingConsent: false,
    },
  });

  // Calculate total occupancy and pricing
  const totalOccupancy = roomCounts.reduce((sum, count, i) => sum + count * ROOM_TYPES[i].occupancy, 0);
  const guests = form.watch("guests");
  const checkIn = form.watch("checkIn");
  const checkOut = form.watch("checkOut");

  // Calculate total price
  const totalPrice = roomCounts.reduce((sum, count, i) => {
    if (checkIn && checkOut) {
      const nights = differenceInDays(checkOut, checkIn);
      return sum + (count * ROOM_TYPES[i].price * nights);
    }
    return sum;
  }, 0);

  // Enforce guests <= total occupancy
  const canSubmit = guests > 0 && totalOccupancy > 0 && guests <= totalOccupancy;

  // Email verification function
  const sendVerificationEmail = async (email) => {
    try {
      const result = await emailjsService.sendVerificationCode(email);
      if (result.success) {
        setShowVerification(true);
        toast.success("Verification code sent to your email");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to send verification code");
    }
  };

  const verifyEmail = async () => {
    try {
      const email = form.getValues("email");
      const result = await emailjsService.verifyCode(email, verificationCode);
      if (result.success) {
        setEmailVerified(true);
        setShowVerification(false);
        toast.success("Email verified successfully!");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Verification failed");
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Prepare booking data
      const bookingData = {
        ...data,
        rooms: ROOM_TYPES.map((room, i) => ({
          name: room.name,
          count: roomCounts[i],
          price: room.price,
        })).filter(room => room.count > 0),
        totalPrice,
        totalNights: checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0,
        bookingDate: new Date().toISOString(),
      };

      // Process booking through email service
      const result = await emailjsService.processBooking(bookingData);
      
      if (result.success) {
        toast.success("Booking request sent successfully! We'll contact you soon.");
        if (onOpenChange) onOpenChange(false);
        form.reset();
        setRoomCounts(ROOM_TYPES.map(() => 0));
        setEmailVerified(false);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to send booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendBookingEmail = async (bookingData) => {
    // This function is now handled by the email service
    console.log("Booking processed through email service:", bookingData);
  };

  const formContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-2 md:p-4 max-w-4xl mx-auto overflow-x-hidden">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl><Input {...field} placeholder="Enter your full name" /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <div className="flex gap-2">
                  <FormControl><Input {...field} type="email" placeholder="your@email.com" /></FormControl>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => sendVerificationEmail(field.value)}
                    disabled={!field.value || !field.value.includes('@')}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
                <FormMessage />
                {emailVerified && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Email verified
                  </div>
                )}
                {!emailVerified && field.value && (
                  <div className="flex items-center gap-2 text-amber-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Email verification optional (recommended)
                  </div>
                )}
              </FormItem>
            )} />
          </div>

          {showVerification && (
            <div className="p-4 border rounded-lg bg-muted/50">
              <h4 className="font-medium mb-2">Email Verification</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter 6-digit code" 
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                />
                <Button type="button" onClick={verifyEmail} disabled={verificationCode.length !== 6}>
                  Verify
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Enter the 6-digit code sent to your email (use "123456" for demo if EmailJS not configured)
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="whatsapp" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl><Input {...field} type="tel" placeholder="+1234567890" /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <FormField name="country" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Country *</FormLabel>
                <FormControl><Input {...field} placeholder="Your country" /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Dates and Guests */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Stay Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField name="checkIn" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Check-in Date *</FormLabel>
                <FormControl>
                  <Calendar
                    selected={field.value}
                    onSelect={field.onChange}
                    mode="single"
                    className="w-full"
                    disabled={(date) => isBefore(date, startOfDay(new Date()))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <FormField name="checkOut" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Check-out Date *</FormLabel>
                <FormControl>
                  <Calendar
                    selected={field.value}
                    onSelect={field.onChange}
                    mode="single"
                    className="w-full"
                    disabled={(date) => checkIn ? isBefore(date, addDays(checkIn, 1)) : isBefore(date, startOfDay(new Date()))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <FormField name="guests" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guests *</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    min={1} 
                    max={totalOccupancy || 1} 
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                  />
                </FormControl>
                <FormMessage />
                {checkIn && checkOut && (
                  <FormDescription>
                    {differenceInDays(checkOut, checkIn)} nights
                  </FormDescription>
                )}
              </FormItem>
            )} />
          </div>
        </div>

        {/* Room Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Room Selection</h3>
          <div className="space-y-3">
            {ROOM_TYPES.map((room, i) => (
              <div key={room.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{room.name}</div>
                  <div className="text-sm text-muted-foreground">{room.description}</div>
                  <div className="text-sm text-muted-foreground">Max {room.occupancy} guests • ${room.price}/night</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    type="button" 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setRoomCounts(rc => rc.map((c, j) => j === i ? Math.max(0, c-1) : c))}
                    disabled={roomCounts[i] === 0}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center font-medium">{roomCounts[i]}</span>
                  <Button 
                    type="button" 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setRoomCounts(rc => rc.map((c, j) => j === i ? c+1 : c))}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            Total occupancy: {totalOccupancy} • Total price: ${totalPrice}
          </div>
          {guests > totalOccupancy && (
            <div className="text-sm text-red-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Number of guests cannot exceed total room occupancy.
            </div>
          )}
        </div>

        {/* Special Requests */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Special Requests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="specialRequests" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requests</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    placeholder="Any special requests or preferences..."
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <FormField name="dietaryRestrictions" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Dietary Restrictions</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    placeholder="Any dietary restrictions or allergies..."
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Method
          </h3>
          <FormField name="paymentMethod" control={form.control} render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <div
                      key={method.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        field.value === method.value
                          ? "border-accent bg-accent/10"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => field.onChange(method.value)}
                    >
                      <div className="flex items-center gap-2">
                        <method.icon className="w-4 h-4" />
                        <span className="font-medium">{method.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <FormField name="termsAccepted" control={form.control} render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I accept the terms and conditions *
                </FormLabel>
                <FormDescription>
                  By accepting, you agree to our booking policies and cancellation terms.
                </FormDescription>
              </div>
            </FormItem>
          )} />
          
          <FormField name="marketingConsent" control={form.control} render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Send me special offers and updates
                </FormLabel>
                <FormDescription>
                  Receive exclusive deals and news about Cozy Cottage.
                </FormDescription>
              </div>
            </FormItem>
          )} />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={!canSubmit || isSubmitting}
            className="min-w-[150px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Booking Request"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );

  if (standalone) {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Book Your Stay</CardTitle>
          <CardDescription>Fill in your details and we will get back to you soon.</CardDescription>
        </CardHeader>
        <CardContent>
          {formContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Your Stay</DialogTitle>
          <DialogDescription>Fill in your details and we will get back to you soon.</DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  );
} 