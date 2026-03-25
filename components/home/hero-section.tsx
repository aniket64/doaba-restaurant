'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  const localizePath = (path: string) => {
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1920&auto=format&fit=crop"
          alt="Fine Dining Indian Cuisine"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-accent tracking-[0.2em] uppercase mb-6"
        >
          Doaba
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl font-heading text-text-light/90 tracking-widest uppercase mb-8"
        >
          {t('subtitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-lg text-text-light/80 max-w-2xl mx-auto mb-12 font-light italic font-menu"
        >
          {t('tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href={localizePath('/reservation')}
            className="bg-accent text-primary px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-all w-full sm:w-auto text-center"
          >
            {t('reserveCta')}
          </Link>
          <Link
            href={localizePath('/menu')}
            className="border border-accent text-accent px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-primary transition-all w-full sm:w-auto text-center"
          >
            {t('menuCta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
