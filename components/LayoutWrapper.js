'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react'; // useEffect'i import ediyoruz
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Bootstrap JS'i client tarafında yüklemek için
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  let date;
  const today = new Date();
  if (today < new Date('2026-01-03')) {
    date = "03.01.2026";
  } else if (today < new Date('2026-07-15')) {
    date = "15.07.2026";
  } else {
    date = "2026 Yazında";
  }

  return (
    <>
      {isHomePage && (
        <Hero title="Hande & Oğuzhantuğrul" subtitle="Nişan Davetiyesi" date={date} backgroundImage="images/cover_bg_1.jpg" />
      )}
      <Navbar />
      <main className={!isHomePage ? 'container mt-5 pt-5' : 'container'}>
        {children}
      </main>
    </>
  );
}