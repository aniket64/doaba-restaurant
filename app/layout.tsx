import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Doaba | Authentic Indian & Nepali Cuisine',
  description: 'A Culinary Journey Through the Flavors of India and the Himalayas. Premium fine-dining experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
