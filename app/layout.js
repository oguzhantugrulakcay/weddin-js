import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import "./globals.css";
import './mobile.css'; // mobil stiller eklendi
import LayoutWrapper from "@/components/LayoutWrapper"; // Yeni bileşeni import ediyoruz.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hande & Oğuzhantuğrul",
  description: "Bu özel zamanlarımızda sizleri de aramızda görmek isteriz. Tüm süreçleri takip edebilmek için web sitemizi ziyaret etmeyi unutmayın!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
