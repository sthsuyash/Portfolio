"use client";

import Logo from "../HeroSection/Logo";
import { useState, useEffect } from "react";
import { ThemeToggler } from "./ThemeToggler";
import Nav from "./Nav/Nav";
import MobileNav from "./Nav/MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-background dark:shadow-slate-800"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#FEF9F5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all duration-200"
              underlineStyles="absolute left-0 top-full h-[3px] bg-primary w-full rounded-full"
            />
            <ThemeToggler />
            {/* Mobile Nav  */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
