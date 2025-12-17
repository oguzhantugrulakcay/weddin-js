import { Geist, Geist_Mono, Lora, Great_Vibes } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import './globals.css';
import './mobile.css';
import LayoutWrapper from '@/components/LayoutWrapper';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const lora = Lora({ variable: '--font-lora', subsets: ['latin'] });
const greatVibes = Great_Vibes({ variable: '--font-great-vibes', weight: '400', subsets: ['latin'] });

export const metadata = { title: 'Hande & Oğuzhantuğrul', description: 'Bu özel zamanlarımızda sizleri de aramızda görmek isteriz. Tüm süreçleri takip edebilmek için web sitemizi ziyaret etmeyi unutmayın!' };

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${greatVibes.variable}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
