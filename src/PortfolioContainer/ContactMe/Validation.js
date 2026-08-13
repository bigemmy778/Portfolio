// Import Zod
import { z } from "zod";

/**
 * Contact Form Validation Schema
 *
 * Think of this file as the "rule book"
 * for our contact form.
 *
 * Every field and its rules live here.
 */

export const contactSchema = z.object({

  /**
   * Name Validation
   */
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name cannot exceed 50 characters."),

  /**
   * Email Validation
   */
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  /**
   * Message Validation
   */
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(1000, "Message cannot exceed 1000 characters.")
});