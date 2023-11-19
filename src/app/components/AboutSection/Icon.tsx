import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) {
    console.error(`Lucide icon "${name}" not found.`);
    return null;
  }

  return <LucideIcon size={20} className={className} />;
};

export default Icon;
