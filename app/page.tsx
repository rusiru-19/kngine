import Card from '@/components/card';
import Hero from '@/components/hero';
import Navigationbar from '@/components/navigation';
import Speakers from '@/components/speakers'
import CompetitionsSection from '@/components/comp'
import CountdownTimer from '@/components/countdown'
import Footer from '@/components/footer';
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      {/* <Preloader /> */}
      <Navigationbar />
      <Hero />
      <CompetitionsSection />
      <CountdownTimer />
      <Card />
      <Footer />
    </div>
  );
}
