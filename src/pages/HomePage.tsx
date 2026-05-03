import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Platform from '../components/Platform.tsx';
import Products from '../components/Products.tsx';
import Testimonials from '../components/Testimonials.tsx';
import FAQ from '../components/FAQ.tsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Platform />
      <Testimonials />
      <FAQ />
    </>
  );
}
