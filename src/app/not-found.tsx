import Image from "next/image";
import Link from "next/link";
import Icon from "./components/Icon";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import * as LucideIcons from "lucide-react";
type LucideIconNames = keyof typeof LucideIcons;

const links: {
  id: number;
  text: string;
  url: string;
  icon: LucideIconNames;
}[] = [
  { id: 1, text: "Home", url: "/", icon: "Home" },
  { id: 2, text: "Projects", url: "/projects", icon: "Code" },
  { id: 3, text: "Contact", url: "/contact", icon: "MessageCircle" },
];

const NotFound = () => {
  return (
    <div className="flex items-center justify-center px-5 sm:px-0">
      <div className="text-center">
        <Image
          className="mx-auto mb-4"
          src="/404.svg"
          alt="404 Not Found"
          width={500}
          height={500}
        />
        <h1 className="text-5xl lg:text-3xl font-bold text-primary mb-3">
          404 <span className="block text-4xl">Not Found</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm md:text-xl">
          Whoops! The page you are looking for does not exist.
        </p>
        {/* List of links */}
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 mx-auto xl:mx-0 mt-10 mb-12 justify-between">
          {links.map((link) => (
            <Link href={link.url} key={link.id} className="w-full">
              <Card className="bg-transparent border border-gray-100 dark:border-gray-700 rounded-lg px-2 py-5 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition duration-300 flex flex-col gap-x-2 gap-y-2 w-[160px] md:w-full font-medium text-center shadow-md dark:shadow-none dark:hover:shadow-lg mx-auto text-3xl">
                <CardHeader className="flex items-center gap-y-2 text-4xl p-0">
                  <Icon className="text-primary text-4xl" name={link.icon} />
                </CardHeader>
                <CardContent className="text-gray-500 dark:text-gray-400 text-lg p-0">
                  {link.text}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
