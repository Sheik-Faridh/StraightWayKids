export interface QuickLink {
	name: string;
	path: string;
}

export interface Location {
	link: string;
	text: string;
}

export interface Phone {
	link: string;
	text: string;
}

export interface Email {
	link: string;
	text: string;
}

export interface ContactLists {
	location: Location;
	phone: Phone;
	email: Email;
}

export interface FooterDetails {
	about: string;
	quick_links: QuickLink[];
	contact_lists: ContactLists;
}

export interface SocialMedia {
	facebook: string;
	twitter: string;
	instagram: string;
	youtube: string;
}

export interface DevelopedBy {
	name: string;
	link: string;
}

export interface CommonDetailsRes {
	name: string;
	type: string;
	footer_details: FooterDetails;
	social_media: SocialMedia;
	developed_by: DevelopedBy;
}
