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
export interface ElementProps {
	size: number;
}

export interface CurriculumElementProps {
	count: number;
	size: number;
	position: number;
}

export interface CurriculumElementState {
	name: string;
	icon: string;
	content: string;
}
