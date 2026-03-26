import { redirect } from 'next/navigation';

export default function CareersPage() {
  redirect('/en/careers');
}

/*
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { careerApplicationTextSchema, type CareerApplicationTextInput } from '@/lib/schemas';

const jobs = [
  { title: 'Executive Chef', type: 'Full-time', location: 'New York, NY' },
  { title: 'Kitchen Staff', type: 'Full-time / Part-time', location: 'New York, NY' },
  { title: 'Waiter / Waitress', type: 'Part-time', location: 'New York, NY' },
  { title: 'Bartender', type: 'Full-time', location: 'New York, NY' },
];

const applicationSchema = careerApplicationTextSchema.extend({
  resume: z.any(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema> & {
  resume: FileList;
};

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setSubmitError(null);

    const resumeFile = data.resume?.[0];
    if (!resumeFile) {
      setSubmitError('Resume is required.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position', data.position);
      formData.append('message', data.message || '');
      formData.append('resume', resumeFile);

      const response = await fetch('https://doaba-brandenburg.de/api/careers.php', {
        method: 'POST',
        body: formData,
      });

      let result: { success?: boolean; message?: string } | null = null;
      try {
        result = (await response.json()) as { success?: boolean; message?: string };
      } catch {
        result = null;
      }

      if (!response.ok || result?.success === false) {
        setSubmitError(result?.message || 'Unable to submit application right now.');
        return;
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setSubmitError('Unable to submit application right now. Please try again.');
    }
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
            Join the Doaba Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light/80 font-menu max-w-2xl mx-auto"
          >
            We are always looking for passionate individuals to join our team and help us deliver exceptional dining experiences.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl"
          >
            <h2 className="text-3xl font-heading text-accent uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
              Apply Now
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
                  <h3 className="text-2xl font-heading text-accent mb-4">Application Submitted</h3>
                  <p className="text-text-light/70 font-menu">
                    Thank you for your interest in joining Doaba. We will review your application and contact you soon.
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
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Phone Number</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Position</label>
                    <select
                      {...register('position')}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="" className="bg-primary">Select Position</option>
                      {jobs.map((job) => (
                        <option key={job.title} value={job.title} className="bg-primary">{job.title}</option>
                      ))}
                    </select>
                    {errors.position && <p className="text-red-400 text-xs mt-1">{errors.position.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Resume (PDF, DOCX)</label>
                    <input
                      {...register('resume')}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-medium file:bg-accent file:text-primary hover:file:bg-accent-hover"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Message (Optional)</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us why you'd be a great fit..."
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-400 text-sm text-center">{submitError}</p>
                  )}

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent text-primary px-12 py-4 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
