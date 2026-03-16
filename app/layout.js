import { Geist, Geist_Mono, Lora, Great_Vibes } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import './globals.css';
import './mobile.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import siteConfig from '@/site.config';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const lora = Lora({ variable: '--font-lora', subsets: ['latin'] });
const greatVibes = Great_Vibes({ variable: '--font-great-vibes', weight: '400', subsets: ['latin'] });

export const metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({ children }) {
  const { theme } = siteConfig;

  const themeVariables = {
    '--color-soft-rose': theme.softRose,
    '--color-peach-blush': theme.peachBlush,
    '--color-lavender-mist': theme.lavenderMist,
    '--color-mint-breeze': theme.mintBreeze,
    '--color-romantic-berry': theme.romanticBerry,
    '--color-text': theme.text,
    '--bg-color': theme.bgColor,
    '--surface-color': theme.surfaceColor,
    '--surface-alt-color': theme.surfaceAltColor,
    '--border-color': theme.borderColor,
    '--shadow-soft': theme.shadowSoft,
    '--timer-gradient-start': theme.timerGradientStart,
    '--cta-gradient-start': theme.ctaGradientStart,
  };

  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${greatVibes.variable}`} style={themeVariables}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
