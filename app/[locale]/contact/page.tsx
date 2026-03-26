'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary text-text-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-medium leading-tight text-accent mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light/80 font-menu max-w-2xl mx-auto"
          >
            We&apos;d love to hear from you. Whether you have a question about our menu, reservations, or special events, our team is ready to answer all your questions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div className="bg-secondary p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-heading text-accent mb-2">Address</h4>
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
                  <h4 className="text-xl font-heading text-accent mb-2">Contact</h4>
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
                  <h4 className="text-xl font-heading text-accent mb-2">Opening Hours</h4>
                  <ul className="text-text-light/80 font-menu leading-relaxed space-y-1">
                    <li>Monday - Thursday: 11:30 - 22:00</li>
                    <li>Friday - Sunday: 11:30 - 22:00</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-48 w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl relative bg-secondary">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-secondary p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl"
          >
            <h2 className="text-3xl font-heading text-accent uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
              Send a Message
            </h2>

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
                  <h3 className="text-2xl font-heading text-accent mb-4">Message Sent</h3>
                  <p className="text-text-light/70 font-menu">
                    Thank you for reaching out to Doaba. We will get back to you as soon as possible.
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
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Full Name</label>
                    <input
                      {...register('name')}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Email Address</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Subject</label>
                    <input
                      {...register('subject')}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder="How can we help?"
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent text-primary px-12 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
