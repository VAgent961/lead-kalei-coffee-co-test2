import Hero from '@/components/Hero';
import About from '@/components/About';
import Coffee from '@/components/Coffee';
import Gallery from '@/components/Gallery';
import Visit from '@/components/Visit';

export const metadata = {
  title: 'Kalei Coffee Co. | Specialty Coffee in Mar Mikhael, Beirut',
  description: 'Discover Kalei Coffee Co., a specialty micro-roastery nestled in a historic Lebanese house in the heart of Mar Mikhael, Beirut.',
  keywords: 'Specialty coffee Mar Mikhael, Best coffee Beirut, Micro-roastery Lebanon, Artisanal coffee Beirut'
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Coffee />
      <Gallery />
      <Visit />
    </>
  );
}
