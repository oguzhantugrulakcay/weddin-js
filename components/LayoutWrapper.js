'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import RSVP from './rsvp';
import siteConfig from '@/site.config';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  let heroInfo = {};
  const today = new Date();
  if (today < new Date(siteConfig.events.soz.date)) {
    heroInfo = {
      date: siteConfig.events.soz.date || "",
      backgroundImage: "/images/bian_event.jpg",
      subtitle: "Nişan Davetiyesi"
    };
  } else if (today < new Date(siteConfig.events.kina.date)) {
    heroInfo = {
      date: siteConfig.events.kina.date || "",
      backgroundImage: "/images/bian_event.jpg",
      subtitle: "Kına Davetiyesi"
    };
  } else {
    heroInfo = {
      date: process.env.NEXT_PUBLIC_WEDDING_DATE || "",
      backgroundImage: "/images/bian_event.jpg",
      subtitle: "Düğün Davetiyesi"
    };
  }

  return (
    <>
      {isHomePage && (
        <Hero bride={{name: siteConfig.bride.name, surname: siteConfig.bride.surname}} groom={{name: siteConfig.groom.name, surname: siteConfig.groom.surname}} subtitle={heroInfo.subtitle} date={heroInfo.date} backgroundImage={heroInfo.backgroundImage} />
      )}
      <Navbar />
      <main className={!isHomePage ? 'container mt-5 pt-5' : 'container'}>
        {children}
        <RSVP />
      </main>
    </>
  );
}