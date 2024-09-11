"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const sendEmail = (templateParams) => {
    const toastId = toast.loading("Sending Your message. Please wait");

    return emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can't send more than 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will back to you soon",
            {
              id: toastId,
              closeButton: true,
            }
          );
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
              closeButton: true,
            }
          );
        }
      )
      .finally(() => {});
  };

  const onSubmit = async (data) => {
    const templateParams = {
      to_name: "Mohamed",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    await sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full max-w-md gap-8"
      >
        <div className="flex flex-col w-full gap-4">
          <motion.input
            variants={item}
            type="text"
            disabled={isSubmitting}
            placeholder="Name"
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg placeholder:text-gray-500"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters long.",
              },
            })}
          />
          {errors.name && (
            <span className="text-xs font-bold text-accent">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full gap-4">
          <motion.input
            variants={item}
            type="email"
            placeholder="Email"
            disabled={isSubmitting}
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg placeholder:text-gray-500"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-xs font-bold text-accent">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full gap-4">
          <motion.textarea
            variants={item}
            placeholder="Message"
            disabled={isSubmitting}
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg placeholder:text-gray-500"
            rows={5}
            {...register("message", {
              required: "This field is required",
              maxLength: {
                value: 500,
                message: "Message should be less than 500 characters",
              },
              minLength: {
                value: 50,
                message: "Message should be at least 50 characters long.",
              },
            })}
          />
          {errors.message && (
            <span className="text-xs font-bold text-accent">
              {errors.message.message}
            </span>
          )}
        </div>

        <motion.input
          variants={item}
          disabled={isSubmitting}
          value={isSubmitting ? "Casting..." : "Cast your message"}
          className="px-8 py-4 capitalize border border-solid rounded-md shadow-lg cursor-pointer bg-background text-foreground border-accent/30 backdrop-blur-sm hover:shadow-glass-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
          type="submit"
        />
      </motion.form>
    </>
  );
}
