import Hero from '../components/Hero';
import Sports from '../components/Sports';
import Amenities from '../components/Amenities';
import Vision from '../components/Vision';
import Corporate from '../components/Corporate';
import Gallery from '../components/Gallery';
import InstagramFeed from '../components/InstagramFeed';
import Contact from '../components/Contact';
import { useSEO, seoConfig } from '../utils/seo';

export default function HomePage() {
  useSEO(seoConfig.home);

  return (
    <>
      <Hero />
      <Sports />
      <Amenities />
      <Vision />
      <Corporate />
      <Gallery />
      <InstagramFeed />
      <Contact />
    </>
  );
}
