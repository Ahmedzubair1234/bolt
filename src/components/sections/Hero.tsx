import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-xl text-white">
          <h1 className="mb-6 text-5xl font-bold">
            Advanced Diagnostics for Better Healthcare
          </h1>
          <p className="mb-8 text-lg">
            State-of-the-art medical diagnostics center providing comprehensive
            healthcare solutions with cutting-edge technology and expert care.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => document.getElementById('book')?.scrollIntoView()}
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}