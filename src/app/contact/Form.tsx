"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import _debounce from "lodash/debounce";

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
    watch,
    formState: { errors },
  } = useForm<Schema>();

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    console.log(data);
    try {
      schema.parse(data);
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log("result:", result);

      console.log(result.text);
      toast.success(result.text);
    } catch (error: any) {
      console.error(error);
      toast.error(error);
    }
  };

  const debouncedSubmit = _debounce(onSubmit, 500);

  const handleFormSubmit = (data: Schema) => {
    debouncedSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-y-4">
      {/* name */}
      <div className="relative flex items-center">
        <User className="absolute left-4 text-primary" size={20} />
        <Input
          type="name"
          id="name"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
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
      </div>
      <Button className="rounded-xl flex items-center gap-x-2">
        Fancy a talk?
        <Send size={20} />
      </Button>
    </form>
  );
};
