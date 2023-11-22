import React from "react";
import { createLucideIcon } from "lucide-react"; 

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  // Assuming createLucideIcon returns a LucideIconComponent
  const LucideIcon = createLucideIcon(name, { displayName: name });

  if (!LucideIcon) {
    console.error(`Lucide icon "${name}" not found.`);
    return null;
  }

  return <LucideIcon size={20} className={className} />;
};

export default Icon;
