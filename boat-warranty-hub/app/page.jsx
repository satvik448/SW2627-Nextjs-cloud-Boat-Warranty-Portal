import LandingNavbar from '@/components/layout/LandingNavbar';
import LandingHero from '@/components/home/LandingHero';

export const metadata = {
  title: 'boAt Warranty Hub — Your product. Our promise.',
  description:
    'Verify your boAt product warranty instantly. Enter your serial number to check warranty status and download your certificate.',
};

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <LandingHero />
    </>
  );
}
