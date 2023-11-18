import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { AiOutlineTool } from "react-icons/ai";
import { RiBriefcase4Fill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

import MyImage from "./MyImage";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 min-h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineer
            </div>
            <h1 className="hero-h1 mb-4">
              Hey👋
              <br />I am <span className="text-primary">Suyash Shrestha</span>
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              An overview providing insights into my personal and professional
              journey, detailing my crafted cadence and engagements.
            </p>
            {/* Buttons  */}
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 mx-auto xl:mx-0 mb-12">
              <Link href="/contact" passHref>
                <Button className="gap-x-2 hover:bg-white hover:text-primary transition-all duration-300 border-2 border-primary rounded-full">
                  Contact Me
                  <MessageCircle size={18} />
                </Button>
              </Link>
            </div>
            {/* Social section */}
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all duration-300"
            />
          </div>
          <div className="hidden xl:flex relative">
            {/* Years of Experience Badge */}
            <Badge
              containerStyles="absolute top-[20%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              endCountText="+"
              badgeText="Years of Experience"
            />
            {/* Projects Completed Badge */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={100}
              endCountText="+"
              badgeText="Finished Projects"
            />
            {/* Current Skill Focus Badge */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<AiOutlineTool />}
              endCountNum={3}
              endCountText="X"
              badgeText="Current Skill Focus"
            />
            {/* Image container */}
            <div className="bg-hero_shape2 dark:bg-hero_shape2_dark w-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <MyImage
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/me.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-0 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
