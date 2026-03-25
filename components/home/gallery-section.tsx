'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', alt: 'Fine Dining Interior', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop', alt: 'Signature Dish', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', alt: 'Cocktails', category: 'Drinks' },
  { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop', alt: 'Chef Cooking', category: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=800&auto=format&fit=crop', alt: 'Dessert Presentation', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop', alt: 'Elegant Table Setting', category: 'Interior' },
];

export function GallerySection() {
  const t = useTranslations('home.gallery');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-accent font-heading tracking-widest uppercase border border-accent px-6 py-2 bg-primary/80 backdrop-blur-sm">
                  {t('view')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-text-light hover:text-accent transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={t('enlargedImageAlt')}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
