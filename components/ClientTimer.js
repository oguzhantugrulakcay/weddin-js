'use client';

import dynamic from 'next/dynamic';

// Timer bileşenini dynamic olarak ve SSR kapalı şekilde import ediyoruz
const TimerComponent = dynamic(() => import('@/components/timer').then(mod => mod.Timer), {
  ssr: false,
  loading: () => <div style={{ height: '120px' }}></div> // Yüklenirken boşluk bırakarak kaymayı önler
});

// Bu sarmalayıcı bileşen, prop'ları dinamik olarak yüklenen Timer'a aktarır
export default function ClientTimer({ targetDate }) {
  return <TimerComponent targetDate={targetDate} />;
}