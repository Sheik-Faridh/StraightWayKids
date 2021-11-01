import { ReactComponentElement } from 'react';

export interface MenuLink {
  name: string;
  path: string;
}

export interface SocialMediaLink {
  name: string;
  icon: ReactComponentElement;
  link: string;
}

export interface LoaderProps {
  setLoading: (arg: boolean) => void;
}
