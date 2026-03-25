'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { DalMakhaniImage } from './dal-makhani-image';
import { HimalayanMomosImage } from './himalayan-momos-image';

const signatureDishes = [
  {
    key: 'butterChicken',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'momo',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'samosa',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'paneerTikka',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'dalMakhani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop',
  },
];

export function SignatureDishesSection() {
  const t = useTranslations('home.signature');
  const locale = useLocale();

  const localizePath = (path: string) => {
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-text-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-bold mb-4"
          >
            {t('eyebrow')}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-medium leading-tight"
          >
            {t('title')}
          </motion.h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-sm bg-secondary border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {dish.key === 'dalMakhani' ? (
                  <DalMakhaniImage />
                ) : dish.key === 'momo' ? (
                  <HimalayanMomosImage />
                ) : (
                  <Image
                    src={dish.image}
                    alt={t(`dishes.${dish.key}.name`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80" />
              </div>
              <div className="p-8 relative z-10 -mt-12 bg-gradient-to-t from-secondary via-secondary to-transparent">
                <div className="mb-3">
                  <h4 className="text-xl font-heading text-accent">{t(`dishes.${dish.key}.name`)}</h4>
                </div>
                <p className="text-sm text-text-light/60 font-menu leading-relaxed">
                  {t(`dishes.${dish.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href={localizePath('/menu')}
            className="inline-block border border-accent text-accent px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-accent hover:text-primary transition-all"
          >
            {t('menuCta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
