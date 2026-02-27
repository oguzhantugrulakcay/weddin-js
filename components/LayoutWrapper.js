'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import RSVP from './rsvp';
import siteConfig from '@/site.config';
import { getHeroEvents } from '@/lib/eventUtils';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const heroInfo = {
    backgroundImage: "/images/bian_event.jpg",
    events: getHeroEvents(siteConfig, new Date()),
  };

  return (
    <>
      {isHomePage && (
        <Hero bride={{name: siteConfig.bride.name, surname: siteConfig.bride.surname}} groom={{name: siteConfig.groom.name, surname: siteConfig.groom.surname}} events={heroInfo.events} backgroundImage={heroInfo.backgroundImage} />
      )}
      <Navbar />
      <main className={!isHomePage ? 'container mt-5 pt-5' : 'container'}>
        {children}
        <RSVP />
      </main>
    </>
  );
}
