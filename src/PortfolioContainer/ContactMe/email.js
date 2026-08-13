// Import the EmailJS SDK
import emailjs from "@emailjs/browser";

/**
 * sendEmail()
 *
 * This helper function sends the contact form
 * data to EmailJS.
 *
 * We keep this logic outside the React component
 * to make our code cleaner and reusable.
 */

export const sendEmail = async (formData) => {
  try {
    // Send the email
    const response = await emailjs.send(

      // Your EmailJS Service ID
      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      // Your EmailJS Template ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      // Variables sent to your EmailJS template
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },

      // Your Public Key
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // Return the EmailJS response
    return response;

  } catch (error) {

    // Display the error in the console
    console.error("Email Error:", error);

    // Re-throw the error so ContactForm can handle it
    throw error;
  }
};