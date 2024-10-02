/* eslint-disable @typescript-eslint/no-unused-vars */
import arang from "@/app/public/arang.jpg";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FormDataSchema } from "../lib/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { send } from "../lib/route";

export default function Contact() {
  const [isHover, setIsHover] = useState<boolean>(true);
  const t = useTranslations("Contact");

  // Define the type for form inputs based on the Zod schema
  type Inputs = z.infer<typeof FormDataSchema>;

  // Initialize react-hook-form with Zod resolver and default values
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Async submit handler to handle form submissions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {
      // Send the form data to the server using the send function
      await send(values);

      // Optionally reset the form fields after submission
      reset();

      // You can add a success toast or UI feedback here
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);

      // You can add an error toast or UI feedback here
      alert("Failed to send email. Please try again.");
    }
  };

  // Toggle hover state for the contact button
  const onHover = () => {
    setIsHover(!isHover);
  };

  return (
    <>
      <div
        id="contact"
        className="box-content max-w-full mx-auto lg:mx-0 px-10 lg:pl-20 py-10 lg:py-30"
        style={{
          backgroundImage: `url(${arang.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <article
          className="text-wrap text-center lg:text-left"
          id="animatedContent"
        >
          <h3
            className="text-white text-2xl lg:text-5xl font-lato font-semibold pb-8"
            id="intrested"
          >
            {t("intrested")}
          </h3>
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <div className="bg-white rounded-lg shadow-2xl py-4 px-10 lg:w-1/2">
              {/* Name Input Field */}
              <div className="mb-4">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  {t("nameLabel")}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={t("nameLabel")}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Input Field */}
              <div className="mb-4">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  {t("emailLabel")}
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Input Field */}
              <div className="mb-4">
                <label className="block text-left text-sm font-medium leading-6 text-gray-900">
                  {t("messageLabel")}
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    placeholder={t("messageLabel")}
                    {...register("message")}
                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start mt-8">
                <button
                  type="submit"
                  className="w-full transition ease-in-out hover:-translate-y-1 hover:scale-100 rounded-sm bg-black px-4 py-2 lg:px-6 lg:py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <p className="font-lato" id="sendMessage">
                    {t("sendMessage")}
                  </p>
                </button>
              </div>
            </div>
          </form>
        </article>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=6289529312100"
          target="_blank"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-full shadow-lg transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path fill="#fff" d="M4.868,43.303l2.694-9.835..."></path>
            <path fill="#cfd8dc" d="M24.014,5c5.079,0..."></path>
            <path fill="#40c351" d="M35.176,12.832c-2.98..."></path>
            <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c..."></path>
          </svg>
          <span
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className="hidden lg:contents contact-text"
            id="contactUs"
          >
            {isHover ? t("contactUs") : t("whatsappContact")}
          </span>
        </a>
      </div>
    </>
  );
}
