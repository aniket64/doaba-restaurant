'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { reservationSchema, type ReservationInput } from '@/lib/schemas';

export function ReservationSection() {
  const t = useTranslations('home.reservation');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationInput) => {
    setSubmitError(null);

    try {
      const response = await fetch('https://doaba-brandenburg.de/api/reservation.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          guests: data.guests,
          date: data.date,
          time: data.time,
          requests: data.requests,
        }),
      });

      let result: { success?: boolean; message?: string } | null = null;
      try {
        result = (await response.json()) as { success?: boolean; message?: string };
      } catch {
        result = null;
      }

      if (!response.ok || result?.success === false) {
        setSubmitError(result?.message || t('errors.submitFailed'));
        return;
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setSubmitError(t('errors.submitTryAgain'));
    }
  };

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-accent/20 animate-pulse" />
        <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full border border-accent/20 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary border border-white/10 p-8 md:p-16 rounded-sm shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-accent uppercase tracking-widest text-sm font-bold mb-4">
              {t('eyebrow')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight text-text-light">
              {t('title')}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading text-accent mb-4">Reservation Confirmed</h3>
                <p className="text-text-light/70 font-menu">
                  {t('successMessage')}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.name')}</label>
                    <input
                      {...register('name')}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder={t('placeholders.name')}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.email')}</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder={t('placeholders.email')}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.phone')}</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder={t('placeholders.phone')}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.guests')}</label>
                    <select
                      {...register('guests')}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="" className="bg-primary">{t('placeholders.guests')}</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                        <option key={num} value={num} className="bg-primary">{num} {num === 1 ? t('person') : t('people')}</option>
                      ))}
                    </select>
                    {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests.message}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.date')}</label>
                    <input
                      {...register('date')}
                      type="date"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors [color-scheme:dark]"
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.time')}</label>
                    <select
                      {...register('time')}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="" className="bg-primary">{t('placeholders.time')}</option>
                      {['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'].map((time) => (
                        <option key={time} value={time} className="bg-primary">{time}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">{t('fields.requests')}</label>
                  <textarea
                    {...register('requests')}
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder={t('placeholders.requests')}
                  />
                </div>

                {submitError && (
                  <p className="text-red-400 text-sm text-center">{submitError}</p>
                )}

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent text-primary px-12 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {isSubmitting ? t('processing') : t('submit')}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
