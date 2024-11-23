import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof LucideIcons;
}

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return <IconComponent {...props} />;
}