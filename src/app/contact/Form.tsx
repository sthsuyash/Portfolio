"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <User className="absolute left-4 text-primary" size={20} />
        <Input type="name" id="name" placeholder="Full Name" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Mail className="absolute left-4 text-primary" size={20} />
        <Input type="email" id="email" placeholder="Email Address" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <MessageSquare
          className="absolute top-4 left-4 text-primary"
          size={20}
        />
        <Textarea id="message" placeholder="Your Message..." />
      </div>
      <Button className="rounded-xl flex items-center gap-x-2">
        Fancy a talk?
        <Send size={20} />
      </Button>
    </form>
  );
};

export default Form;
