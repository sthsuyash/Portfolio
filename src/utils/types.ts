import * as LucideIcons from "lucide-react";
type LucideIconNames = keyof typeof LucideIcons;

export interface IInfoData {
  icon: LucideIconNames;
  text: string;
}

export interface IQualificationData {
  title: string;
  data: {
    institute?: string;
    qualification?: string;
    duration?: string;
    company?: string;
    position?: string;
    title?: string;
  }[];
}

export interface ISkillsData {
  title: string;
  data: {
    img?: string;
  }[];
}

export interface IServicesData {
  icon: LucideIconNames;
  title: string;
  description: string;
}