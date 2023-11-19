import { motion } from "framer-motion";
import Link from "next/link";

import { usePathname } from "next/navigation";

type NavProps = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
};

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "Contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index: number) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${linkStyles} capitalize hover:text-primary transition-all duration-300`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
