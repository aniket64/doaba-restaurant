'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const reviews = [
  { key: 'first', rating: 5 },
  { key: 'second', rating: 5 },
  { key: 'third', rating: 5 },
];

export function ReviewsSection() {
  const t = useTranslations('home.reviews');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 md:py-32 bg-secondary text-text-light overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
        <Quote size={400} className="text-text-light" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
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
            className="text-4xl md:text-5xl font-heading font-medium leading-tight text-text-light"
          >
            {t('title')}
          </motion.h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8 md:px-16"
            >
              <div className="flex justify-center mb-6 text-accent">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-3xl font-heading italic leading-relaxed text-text-light/90 mb-8">
                &quot;{t(`items.${reviews[currentIndex].key}.text`)}&quot;
              </p>
              <p className="text-sm uppercase tracking-widest font-bold text-accent">
                — {t(`items.${reviews[currentIndex].key}.author`)}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full border border-text-light/20 flex items-center justify-center text-text-light hover:bg-text-light hover:text-secondary transition-colors pointer-events-auto"
              aria-label={t('previousAria')}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full border border-text-light/20 flex items-center justify-center text-text-light hover:bg-text-light hover:text-secondary transition-colors pointer-events-auto"
              aria-label={t('nextAria')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
