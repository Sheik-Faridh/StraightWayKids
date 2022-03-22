export interface BoardSchoolMemberModel {
	title: string;
	avatar: string;
	surname: string;
	name: string;
	about: string;
	degree: string;
}

export interface Video {
	bg: string;
	quotes: string;
	quotes_in: string;
}

export interface SliderImage {
	name: string;
	content: string;
}

export interface Prospectus {
	versus: string;
	arabic_content: string;
	english_content: string;
}

export interface Correspondent {
	title: string;
	avatar: string;
	surname: string;
	name: string;
	about: string;
	degree: string;
}

export interface Principal {
	title: string;
	avatar: string;
	surname: string;
	name: string;
	about: string;
	degree: string;
}

export interface BoardOfSchool {
	correspondent: Correspondent;
	principal: Principal;
}

export interface CurriculumElement {
	name: string;
	icon: string;
	content: string;
}

export interface HomePageRes {
	flash: string[];
	video: Video;
	sliderImages: SliderImage[];
	prospectus: Prospectus;
	boardOfSchool: BoardOfSchool;
	title: string;
	objective: string;
	curriculum_elements: CurriculumElement[];
}
