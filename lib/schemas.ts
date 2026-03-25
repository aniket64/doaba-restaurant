import { z } from 'zod';

export const reservationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  guests: z.string().min(1, 'Number of guests is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  requests: z.string().optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const careerApplicationTextSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  position: z.string().min(1, 'Position is required'),
  message: z.string().optional(),
});

export type CareerApplicationTextInput = z.infer<typeof careerApplicationTextSchema>;

export const feedbackSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  rating: z.number().min(1, 'Please provide a rating'),
  message: z.string().min(10, 'Please share at least 10 characters'),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;
