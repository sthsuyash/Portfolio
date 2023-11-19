export interface IInfoData {
  icon: string;
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
