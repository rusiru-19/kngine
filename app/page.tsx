import Card from '@/components/card';
import Hero from '@/components/hero';
import Navigationbar from '@/components/navigation';
import Speakers from '@/components/speakers'
import CompetitionsSection from '@/components/comp'
import CountdownTimer from '@/components/countdown'
import Footer from '@/components/footer';
import { cn } from "@/lib/utils";
import Script from "next/script";
import SmoothScroll from "@/components/scrollsmooth"
import Reveal from '@/components/reveals';
export default function Home() {
  return (
    <div>
            <Script
        id="kngine-event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "KNGINE – Richmond College ICT Day",
            description:
              "KNGINE is the annual ICT Day organized by the Richmond College ICT Society (RITS), featuring technology competitions, innovation, and digital creativity.",
            startDate: "2026-02-12T08:30:00+05:30",
            endDate: "2026-02-12T17:00:00+05:30",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Richmond College",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Galle",
                addressCountry: "LK",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Richmond College ICT Society (RITS)",
              url: "https://kngine.richmondcollege.lk",
            },
            image: [
              "https://kngine.richmondcollege.lk/images/imagebg.png",
            ],
            url: "https://kngine.richmondcollege.lk",
          }),
        }}
      />
      <Navigationbar />
  <Reveal>
    <Hero />
  </Reveal>

  <Reveal delay={0.1}>
    <CompetitionsSection />
  </Reveal>

  <Reveal delay={0.2}>
    <CountdownTimer />
  </Reveal>

  <Reveal>
    <Card />
  </Reveal>

  <Reveal>
    <Footer />
  </Reveal>


    </div>
  );
}
