import React from 'react';
import {
  CodeBracketIcon,
  PresentationChartBarIcon,
  MegaphoneIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export interface ServiceIconProps {
  name: string;
  className?: string;
}

const iconMap = {
  'web-development': CodeBracketIcon,
  'digital-marketing': MegaphoneIcon,
  'analytics': ChartBarIcon,
  'seo': GlobeAltIcon,
  'mobile-apps': DevicePhoneMobileIcon,
  'consulting': PresentationChartBarIcon,
} as const;

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    return <CodeBracketIcon className={className} />;
  }
  
  return <IconComponent className={className} />;
};

export default ServiceIcon;