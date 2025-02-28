import { ReactNode } from 'react';

export interface IProjectCard {
  children: ReactNode;
  screenSrc: string;
  title: string;
  app: string;
  showSource: boolean;
  sourceUrl: string;
  showLink: boolean;
  linkUrl: string;
}

export interface ITechIcon {
  project: string;
  tech: string;
  icon: string;
}
