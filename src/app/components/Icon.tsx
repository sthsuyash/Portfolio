import React from 'react';
import * as LucideIcons from 'lucide-react';

type LucideIconNames = keyof typeof LucideIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: LucideIconNames;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...restProps }) => {
  const IconComponent = LucideIcons[name] as React.FC<React.SVGProps<SVGSVGElement>>;

  if (!IconComponent) {
    console.error(`Icon '${name}' not found in Lucide.`);
    return null;
  }

  return <IconComponent className={className} {...restProps} />;
};

export default Icon;
