import BookingForm from "@/components/BookingForm";

export default function BookingFormPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-background py-4 sm:py-8 lg:py-12 px-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
            Book Your Stay
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Reserve your perfect mountain getaway at Cozy Cottage Ella
          </p>
        </div>
        <BookingForm standalone />
      </div>
    </div>
  );
}