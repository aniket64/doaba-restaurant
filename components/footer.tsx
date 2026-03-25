"use client";

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '@/components/logo';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const localizePath = (path: string) => {
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
  };

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setNewsletterError(null);
    setIsSubmitting(true);

    try {
      console.log('Submitting newsletter with email:', newsletterEmail);
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      console.log('Response status:', response.status);
      
      let result: { success?: boolean; message?: string } | null = null;
      try {
        result = (await response.json()) as { success?: boolean; message?: string };
        console.log('Response data:', result);
      } catch {
        console.log('Failed to parse response as JSON');
        result = null;
      }

      if (!response.ok || result?.success !== true) {
        const errorMsg = result?.message || 'Unable to subscribe right now.';
        console.log('Subscription failed:', errorMsg);
        setNewsletterError(errorMsg);
        return;
      }

      console.log('Subscription successful!');
      setNewsletterEmail('');
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3500);
    } catch (error) {
      console.error('Subscription error:', error);
      setNewsletterError('Unable to subscribe right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-secondary text-text-light/80 py-16 border-t border-white/10 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20"></div>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Newsletter */}
        <div className="space-y-6">
          <Logo href={localizePath('/')} />
          <p className="text-sm leading-relaxed">
            {t('description')}
          </p>
          <form className="flex flex-col space-y-3 mt-4" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletter" className="text-sm uppercase tracking-wider text-accent font-medium">
              {t('newsletterTitle')}
            </label>
            <div className="flex">
              <input
                type="email"
                id="newsletter"
                placeholder={t('newsletterPlaceholder')}
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                className="bg-primary border border-white/20 px-4 py-2 w-full focus:outline-none focus:border-accent text-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting || !newsletterEmail.trim()}
                className="bg-accent text-primary px-4 py-2 text-sm uppercase tracking-wider font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '...' : t('newsletterButton')}
              </button>
            </div>
            {newsletterError && <p className="text-red-400 text-xs">{newsletterError}</p>}
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-heading text-accent uppercase tracking-widest mb-6">{t('quickLinksTitle')}</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href={localizePath('/')} className="hover:text-accent transition-colors">{t('links.home')}</Link></li>
            <li><Link href={localizePath('/menu')} className="hover:text-accent transition-colors">{t('links.menu')}</Link></li>
            <li><Link href={localizePath('/reservation')} className="hover:text-accent transition-colors">{t('links.reservation')}</Link></li>
            <li><Link href={localizePath('/gallery')} className="hover:text-accent transition-colors">{t('links.gallery')}</Link></li>
            <li><Link href={localizePath('/careers')} className="hover:text-accent transition-colors">{t('links.careers')}</Link></li>
            <li><Link href={localizePath('/feedback')} className="hover:text-accent transition-colors">{t('links.feedback')}</Link></li>
            <li><Link href={localizePath('/contact')} className="hover:text-accent transition-colors">{t('links.contact')}</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-heading text-accent uppercase tracking-widest mb-6">{t('contactTitle')}</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>Poststraße 14, Atlandsberg, 15345</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+49 033438651667</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>info@doaba-brandenburg.de</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-lg font-heading text-accent uppercase tracking-widest mb-6">{t('openingHoursTitle')}</h4>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-white/10 pb-2">
              {t('openingHours.weekdays')}
            </li>
            <li className="border-b border-white/10 pb-2">
              {t('openingHours.weekend')}
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-center text-xs text-text-light/50">
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>

      <AnimatePresence>
        {showThankYou && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none"
            >
              <div className="bg-primary border border-accent/30 rounded-sm p-8 md:p-12 shadow-2xl max-w-md w-full mx-4 text-center pointer-events-auto">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading text-accent mb-2">Success!</h3>
                <p className="text-text-light/80 font-menu">
                  Subscribed successfully, Thank you!
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
