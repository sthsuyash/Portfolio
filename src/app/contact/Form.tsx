"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import _debounce from "lodash/debounce";
import { Spinner } from "@/components/ui/Spinner/Spinner";

// creating a schema for the form
const schema = z.object({
  name: z.string().min(3, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(5, { message: "Message is too short" }),
});

// creating a type for the schema
type Schema = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>();

  // loading state for the button
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    setLoading(true);

    try {
      schema.parse(data);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result?.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error: any) {
      const err = JSON.parse(error?.message);
      toast.error(err[0].message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSubmit = _debounce(onSubmit, 500);

  const handleFormSubmit = (data: Schema) => {
    debouncedSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-y-4"
    >
      {/* name */}
      <div className="relative flex items-center">
        <User className="absolute left-4 text-primary" size={20} />
        <Input
          type="name"
          id="name"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
        <span className="text-red-500">{errors.name?.message}</span>
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Mail className="absolute left-4 text-primary" size={20} />
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
        />
        <span className="text-red-500">{errors.email?.message}</span>
      </div>
      {/* message */}
      <div className="relative flex items-center">
        <MessageSquare
          className="absolute top-4 left-4 text-primary"
          size={20}
        />
        <Textarea
          id="message"
          placeholder="Your Message..."
          {...register("message", { required: true })}
        />
        <span className="text-red-500">{errors.message?.message}</span>
      </div>
      <Button
        className={`rounded-xl flex items-center gap-x-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner size={20} />Sending...
          </>
        ) : (
          "Fancy a talk?"
        )}
        <Send size={20} />
      </Button>
    </form>
  );
}
