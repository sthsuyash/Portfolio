import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import Link from "next/link";

const Cta = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center justify-center py-16 max-w-2xl mx-auto">
          <h2 className="section-title h2 text-center mb-5">
            Ready to Dive In?
          </h2>
          <p className="subtitle">
            I'm always open to new opportunities and challenges. If you have a
            project in mind, or just want to chat, feel free to contact me.
          </p>
          <Link href="/contact">
            <Button className="rounded-full">
              Contact Me
              <SendIcon className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
