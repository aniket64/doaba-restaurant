'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Logo } from '@/components/logo';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'menu', href: '/menu' },
  { key: 'reservation', href: '/reservation' },
  { key: 'gallery', href: '/gallery' },
  { key: 'career', href: '/careers' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const localizePath = (path: string) => {
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
  };

  const withoutLocalePrefix = (path: string) => {
    if (path === '/en' || path === '/de') {
      return '/';
    }
    return path.replace(/^\/(en|de)(?=\/|$)/, '') || '/';
  };

  const normalizedPathname = withoutLocalePrefix(pathname);

  const switchLocale = (nextLocale: 'en' | 'de') => {
    const target = normalizedPathname === '/' ? `/${nextLocale}` : `/${nextLocale}${normalizedPathname}`;
    router.push(target);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20"></div>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Logo href={localizePath('/')} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={localizePath(link.href)}
                className={`text-sm uppercase tracking-wider hover:text-accent transition-colors ${
                  normalizedPathname === link.href ? 'text-accent' : 'text-text-light/80'
                }`}
              >
                {t(`links.${link.key}`)}
              </Link>
            ))}
            <Link
              href={localizePath('/reservation')}
              className="bg-accent text-primary px-6 py-2.5 rounded-sm text-sm uppercase tracking-wider font-medium hover:bg-accent-hover transition-colors"
            >
              {t('reserveTable')}
            </Link>
            <div className="flex items-center border border-white/20 rounded-sm overflow-hidden">
              <button
                type="button"
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 text-xs tracking-widest font-medium ${
                  locale === 'en' ? 'bg-accent text-primary' : 'text-text-light/80 hover:text-accent'
                }`}
                aria-label={t('switchToEnglish')}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLocale('de')}
                className={`px-3 py-1.5 text-xs tracking-widest font-medium ${
                  locale === 'de' ? 'bg-accent text-primary' : 'text-text-light/80 hover:text-accent'
                }`}
                aria-label={t('switchToGerman')}
              >
                DE
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-text-light hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6 text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={localizePath(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-heading uppercase tracking-widest ${
                    normalizedPathname === link.href ? 'text-accent' : 'text-text-light'
                  }`}
                >
                  {t(`links.${link.key}`)}
                </Link>
              ))}
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => switchLocale('en')}
                  className={`px-4 py-2 border rounded-sm tracking-widest ${
                    locale === 'en' ? 'bg-accent text-primary border-accent' : 'border-white/20 text-text-light'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => switchLocale('de')}
                  className={`px-4 py-2 border rounded-sm tracking-widest ${
                    locale === 'de' ? 'bg-accent text-primary border-accent' : 'border-white/20 text-text-light'
                  }`}
                >
                  DE
                </button>
              </div>
            </nav>
            <div className="mt-auto mb-10 flex justify-center">
              <Link
                href={localizePath('/reservation')}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent text-primary px-8 py-4 rounded-sm text-lg uppercase tracking-wider font-medium w-full text-center"
              >
                {t('reserveTable')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
