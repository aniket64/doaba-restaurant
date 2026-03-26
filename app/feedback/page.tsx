import { redirect } from 'next/navigation';

export default function FeedbackPage() {
  redirect('/en/feedback');
}
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Star } from 'lucide-react';
import { feedbackSchema, type FeedbackInput } from '@/lib/schemas';

export default function FeedbackPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: 0,
    },
  });

  const selectedRating = watch('rating');

  const onSubmit = async (data: FeedbackInput) => {
    setSubmitError(null);
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as { success: boolean; message?: string };
    if (!response.ok || !result.success) {
      setSubmitError(result.message || 'Unable to submit feedback right now.');
      return;
    }

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
            Your Feedback
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light/80 font-menu max-w-2xl mx-auto"
          >
            We value your experience at Doaba. Please share your thoughts with us so we can continue to improve and provide the best service.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl"
          >
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
                  <h3 className="text-2xl font-heading text-accent mb-4">Feedback Received</h3>
                  <p className="text-text-light/70 font-menu">
                    Thank you for taking the time to share your experience. Your feedback is invaluable to us.
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
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-4">Rating</label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setValue('rating', star, { shouldValidate: true })}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            size={32}
                            className={`${
                              star <= (hoveredRating || selectedRating)
                                ? 'fill-accent text-accent'
                                : 'text-white/20'
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                    {errors.rating && <p className="text-red-400 text-xs mt-2">{errors.rating.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-light/60 mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-text-light focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your experience..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
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
                      {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
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
