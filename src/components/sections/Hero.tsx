import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DOCTORS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091',
    title: 'Modern Facilities',
  },
  {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053',
    title: 'Advanced Equipment',
  },
  {
    url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073',
    title: 'Expert Care',
  },
];

export function Hero() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeDoctorIndex, setActiveDoctorIndex] = useState(0);

  return (
    <section id="home" className="min-h-[600px] bg-background">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Left Column - Gallery */}
        <div className="relative">
          <Carousel
            className="w-full"
            onSelect={(index) => setActiveGalleryIndex(index)}
          >
            <CarouselContent>
              {GALLERY_IMAGES.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  activeGalleryIndex === index
                    ? 'bg-white w-6'
                    : 'bg-white/50'
                )}
                onClick={() => setActiveGalleryIndex(index)}
              />
            ))}
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calendar" className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>

        {/* Right Column - Doctor Profiles */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">Meet Our Expert Doctors</h1>
          <Carousel
            className="w-full"
            onSelect={(index) => setActiveDoctorIndex(index)}
          >
            <CarouselContent>
              {DOCTORS.map((doctor, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                    <p className="text-muted-foreground mb-1">{doctor.department}</p>
                    <p className="text-sm text-muted-foreground">
                      {doctor.specialization}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="mt-4 flex justify-center gap-2">
            {DOCTORS.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  activeDoctorIndex === index
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300'
                )}
                onClick={() => setActiveDoctorIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}