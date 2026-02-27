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
  //TODO: tarihleri okunabilir bir formata çevir
  if (today < new Date(siteConfig.events.soz.date)) {
    heroInfo = {
      backgroundImage: "/images/bian_event.jpg",
      events: [
        {
          key: "soz",
          subtitle: "Nişan Davetiyesi",
          date: siteConfig.events.soz.date || "",
        },
      ],
    };
  } else {
    heroInfo = {
      backgroundImage: "/images/bian_event.jpg",
      events: [
        {
          key: "kina",
          subtitle: "Kına Davetiyesi",
          date: siteConfig.events.kina.date || "",
        },
        {
          key: "wedding",
          subtitle: "Düğün Davetiyesi",
          date: siteConfig.events.wedding.date || "",
        },
      ],
    };
  }

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
