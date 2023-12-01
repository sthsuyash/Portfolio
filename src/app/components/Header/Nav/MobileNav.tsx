import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "../../HeroSection/Logo";
import Socials from "../../Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col gap-y-4 items-center"
              linkStyles="text-2xl"
              underlineStyles="w-0 h-[2px] bg-primary transition-all duration-300"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl " />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
