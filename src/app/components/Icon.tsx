// Icon.tsx
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
    name: string;
    size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) {
        console.error(`Lucide icon "${name}" not found.`);
        return null;
    }

    return <LucideIcon size={ size } />;
};

export default Icon;
