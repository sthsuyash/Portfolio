import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

const icons = [
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/sthsuyash/",
  },
  {
    icon: <Github />,
    link: "https://github.com/sthsuyash",
  },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((item, index) => {
        return (
          <Link href={item.link} key={index} className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
