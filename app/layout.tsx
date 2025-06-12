import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A Work of Art Health Coach | Karen Myers',
  description: 'Transform your relationship with food and your body with holistic health coaching by Karen Myers, LCSW. It\'s not a diet plan–it\'s an inner journey.',
  keywords: 'health coach, holistic health, food relationship, weight management, wellness coaching, mindfulness, women\'s health, LCSW, medical social worker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-grow pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
