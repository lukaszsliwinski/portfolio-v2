import { ReactNode } from 'react';

export interface IProjectCard {
  children: ReactNode,
  screenSrc: string,
  title: string,
  description: string,
  showSource: boolean,
  sourceUrl: string,
  showLink: boolean,
  linkUrl: string,
}