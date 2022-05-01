import Theme from 'typings/theme';

export const appHeaderStyles = (props: { theme: Theme }) => {
	const { primaryBg } = props.theme;
	return `
		padding: 10px 50px;
		background-color: ${primaryBg};
		height: 90px;

		& div.menu-icon-wrapper {
			& > svg {
				height: 35px;
				width: 35px;
				fill: #fff;
				cursor: pointer;
				&:hover {
					fill: #de7d2a;
				}
			}
		}

		@media only screen and (max-width: 425px) {
			padding: 10px;
		}
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

			@media screen and (max-width: 1024px) {
				& h2 {
					font-size: 2.5rem;
				}
				& h4 {
					font-size: 1rem;
				}
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
			&.active {
				color: ${primaryHoverColor};
			}
		}

		&.menu-dropdown {
			color: #12344d;
			gap: 5px;
			& li {
				width: 50%;
				padding: 8px;
				text-align: center;
				&:hover {
					background-color: #dae4eb;
				}
			}
		}
    `;
};
