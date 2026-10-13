"use client";
import { FormData } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { TbLoader } from "react-icons/tb";
import { toast } from "react-toastify";
import * as zod from "zod";


export default function ContactForm() {
  
  const t = useTranslations("Contact.Form");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formSchema = zod.object({
    name: zod
      .string()
      .nonempty(t("Name.Error.Required"))
      .min(3, t("Name.Error.MinLength"))
      .max(50, t("Name.Error.MaxLength")),
    email: zod.email(t("Email.Error.Invalid")).nonempty(t("Email.Error.Required")),
    subject: zod
      .string()
      .nonempty(t("Subject.Error.Required"))
      .min(3, t("Subject.Error.MinLength"))
      .max(100, t("Subject.Error.MaxLength")),
    message: zod
      .string()
      .nonempty(t("Message.Error.Required"))
      .min(10, t("Message.Error.MinLength"))
      .max(500, t("Message.Error.MaxLength")),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { register, reset, handleSubmit, formState } = form;

  async function onSubmit(formData: FormData) {
    const toastState = toast.loading("Please wait...");
    setIsLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { message, ok } = await response.json();
    setIsLoading(false);
    if (ok) {
      reset();
      toast.update(toastState, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      toast.update(toastState, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            {t("Name.Label")}
            <sup className="text-red-500">*</sup>
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="p-2 border-2 rounded-md"
            placeholder={t("Name.Placeholder")}
          />
          <span className="text-red-500 text-sm ps-1">
            {formState.errors.name && `${formState.errors.name?.message}`}
          </span>
        </div>
        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            {t("Email.Label")}
            <sup className="text-red-500">*</sup>
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="p-2 border-2 rounded-md"
            placeholder={t("Email.Placeholder")}
          />
          <span className="text-red-500 text-sm ps-1">
            {formState.errors.email && `${formState.errors.email?.message}`}
          </span>
        </div>
        {/* Subject Input */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-semibold">
            {t("Subject.Label")}
            <sup className="text-red-500">*</sup>
          </label>
          <input
            {...register("subject")}
            id="subject"
            type="text"
            className="p-2 border-2 rounded-md"
            placeholder={t("Subject.Placeholder")}
          />
          <span className="text-red-500 text-sm ps-1">
            {formState.errors.subject && `${formState.errors.subject?.message}`}
          </span>
        </div>
        {/* Message Input */}
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold">
            {t("Message.Label")}
            <sup className="text-red-500">*</sup>
          </label>
          <textarea
            {...register("message")}
            id="message"
            className="p-2 border-2 rounded-md min-h-12 max-h-40"
            placeholder={t("Message.Placeholder")}
          />
          <span className="text-red-500 text-sm ps-1">
            {formState.errors.message && `${formState.errors.message?.message}`}
          </span>
        </div>

        <button
          disabled={isLoading}
          className={`${isLoading ? "cursor-not-allowed bg-gray-400 text-black" : "bg-emerald-500 dark:bg-emerald-800 dark:text-mist-200 dark:hover:text-white dark:hover:bg-emerald-500 cursor-pointer hover:bg-emerald-800 text-white"} rounded-full p-2.5 font-semibold gap-1 transition-all duration-300 flex justify-center items-center text-lg`}
        >
          {isLoading ? t("FormBtn.Loading") : t("FormBtn.Submit")}
          {isLoading ? (
            <TbLoader className="inline-block mx-1" />
          ) : (
            <IoIosSend className="inline-block mx-1" />
          )}
        </button>
      </form>
    </>
  );
}
