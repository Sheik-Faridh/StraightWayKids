import Theme from 'typings/theme';

export const appHeaderStyles = (props: { theme: Theme }) => {
	const { primaryBg } = props.theme;
	return `
    padding: 10px 50px;
	background-color: ${primaryBg};
	height: 90px;
    `;
};

export const logoContainerStyles = (props: { theme: Theme }) => {
	const { primaryColor } = props.theme;
	return `
    gap: 10px;
	& div.logo-wrapper {
		width: 70px;
		height: 70px;
	}
	& div.school-name-wrapper {
		color: ${primaryColor};
		& h2 {
			font-size: 3.2rem;
			font-family: 'Arabic';
			line-height: 0.9;
		}
		& h4 {
			font-size: 1.5rem;
			font-family: 'Arabic';
			line-height: 1.4;
		}
	}
    `;
};

export const menuWrapperStyles = (props: { theme: Theme }) => {
	const { primaryColor, primaryHoverColor } = props.theme;

	return `
    gap: 20px;
	color: ${primaryColor};
	& li {
		&:hover {
			color: ${primaryHoverColor};
		}
	}
    `;
};
