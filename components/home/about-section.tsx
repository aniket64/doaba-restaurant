'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('home.about');

  return (
    <section className="py-24 md:py-32 bg-secondary text-text-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-accent uppercase tracking-widest text-sm font-bold">{t('eyebrow')}</h3>
            <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight text-text-light">
              {t('title')}
            </h2>
            <div className="w-16 h-1 bg-accent"></div>
            <p className="text-lg leading-relaxed font-menu text-text-light/80">
              {t('paragraph1')}
            </p>
            <p className="text-base leading-relaxed text-text-light/70">
              {t('paragraph2')}
            </p>
            <div className="pt-4">
              <p className="text-sm font-heading italic mt-2 text-text-light/60">Doaba</p>
            </div>
          </motion.div>

          {/* Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10">
              <Image
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
                alt="Authentic Spices"
                fill
                className="object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 z-20 border-8 border-secondary">
              <Image
                src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=600&auto=format&fit=crop"
                alt="Traditional Cooking"
                fill
                className="object-cover rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/30 rounded-full z-0 animate-[spin_20s_linear_infinite]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
