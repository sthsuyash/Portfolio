import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "./Form";
import { InfoData } from "@/utils/data";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Greetings🌟
            </div>
            <h1 className="capitalize h1 max-w-sm mb-8">
              Shall we collaborate?
            </h1>
            <p className="subtitle">
              Excited to combine our strengths for success. Any ideas or
              preferences? Let's create something amazing together! 🚀
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* info text and form  */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={26} className="text-primary" />
              <div>{InfoData[2].text}</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={26} className="text-primary" />
              <div>{InfoData[3].text}</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={26} className="text-primary" />
              <div>{InfoData[1].text}</div>
            </div>
          </div>
          {/* form  */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
