import {HeroSection} from '@/components/home/hero-section';
import {AboutSection} from '@/components/home/about-section';
import {SignatureDishesSection} from '@/components/home/signature-dishes';
import {ReservationSection} from '@/components/home/reservation-section';
import {GallerySection} from '@/components/home/gallery-section';
import {ReviewsSection} from '@/components/home/reviews-section';
import {LocationSection} from '@/components/home/location-section';

export default function LocaleHomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SignatureDishesSection />
      <ReservationSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
    </>
  );
}
