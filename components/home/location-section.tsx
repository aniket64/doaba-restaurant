'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function LocationSection() {
  const t = useTranslations('home.location');

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-heading text-accent mb-2">{t('addressLabel')}</h4>
                <p className="text-text-light/80 font-menu leading-relaxed">
                  Poststraße 14<br />
                  Atlandsberg, 15345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-heading text-accent mb-2">{t('contactLabel')}</h4>
                <p className="text-text-light/80 font-menu leading-relaxed">
                  +49 033438651667<br />
                  info@doaba-brandenburg.de
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Clock className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-heading text-accent mb-2">{t('openingHoursLabel')}</h4>
                <ul className="text-text-light/80 font-menu leading-relaxed space-y-1">
                  <li>{t('openingHours.weekdays')}</li>
                  <li>{t('openingHours.weekend')}</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[350px] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl relative bg-secondary"
          >
            <iframe
              src="https://maps.google.com/maps?q=Poststra%C3%9Fe%2014,%2015345%20Altlandsberg&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
