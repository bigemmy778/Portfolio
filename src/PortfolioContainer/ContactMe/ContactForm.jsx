import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema } from "./Validation";
import { sendEmail } from "./email";

// React Hook Form
import { useForm } from "react-hook-form";

function ContactForm() {
    // Keeps track of whether an email is currently being sent
    const [loading, setLoading] = useState(false);

    /**
     * useForm() manages:
     * - form state
     * - input registration
     * - validation (later with Zod)
     * - form submission
     */
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        // Tell React Hook Form to use our Zod schema
        resolver: zodResolver(contactSchema),

        // Validate fields as the user interacts with them
        mode: "onTouched",
    });

    /**
     * This function runs ONLY when the form
     * passes validation.
     *
     * For now we're just printing the data.
     * Later this is where EmailJS will send
     * the email.
     */
    const onSubmit = async (data) => {

        // Start loading
        setLoading(true);

        try {

            // Send email
            await sendEmail(data);

            // Success message
            toast.success("Message sent successfully!");

            // Clear the form
            reset();

        } catch (error) {

            toast.error("Something went wrong.");

        } finally {

            // Stop loading
            setLoading(false);

        }

    };

    return (

        <div className="contact-form-container">

            {/* Form */}
            <form
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >

                {/* ---------------- Name ---------------- */}

                <div className="form-group">

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"

                        /*
                         Register tells React Hook Form
                         to keep track of this field.
                        */
                        {...register("name", {
                            required: "Name is required"
                        })}
                    />

                    {/* Validation Error */}
                    {errors.name && (
                        <small className="error">
                            {errors.name.message}
                        </small>
                    )}

                </div>

                {/* ---------------- Email ---------------- */}

                <div className="form-group">

                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"

                        {...register("email", {
                            required: "Email is required"
                        })}
                    />

                    {errors.email && (
                        <small className="error">
                            {errors.email.message}
                        </small>
                    )}

                </div>

                {/* ---------------- Message ---------------- */}

                <div className="form-group">

                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea

                        id="message"
                        disabled={loading}
                        rows="6"

                        placeholder="Write your message..."

                        {...register("message", {
                            required: "Please enter a message"
                        })}

                    />

                    {errors.message && (
                        <small className="error">
                            {errors.message.message}
                        </small>
                    )}

                </div>

                {/* ---------------- Button ---------------- */}

                <button
                    className="send-btn"
                    type="submit"
                    disabled={loading}
                >
                    {
                        loading
                            ? "⏳ Sending..."
                            : "Send Message"
                    }
                </button>

            </form>

        </div>

    );
}

export default ContactForm;