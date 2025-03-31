import { ReactNode } from 'react';

export interface IProjectCard {
  children: ReactNode;
  previewSrc: string;
  title: string;
  app: string;
  showSource: boolean;
  sourceUrl: string;
  showLink: boolean;
  linkUrl: string;
}

export interface ITechIcon {
  tech: string;
  icon: string;
}

export interface ITechBtn {
  callback: () => void;
  label: string;
  active: boolean;
}
