import Theme from 'typings/theme';

export const footerTopContainerStyles = (props: { theme: Theme }) => {
	const { primaryHoverColor } = props.theme;
	return `
    height: 400px;
    gap: 40px;
    & div.bg-wrapper {
        z-index: -1;
    }
    & div.school-details {
        width: 25%;
        gap: 20px;
        & div.logo-wrapper {
        gap: 10px;
        & div.img-wrapper {
            width: 100px;
            height: 100px;
        }
        & div.school-name {
            color: #fff;
            font-family: 'Arabic';
            & h2 {
            font-size: 3.5rem;
            line-height: 0.9;
            }
            & h4 {
            font-size: 1.5rem;
            }
        }
        }
    }
    & div.quick-links {
        width: 25%;
        gap: 10px;
        & h4 {
        color: #c8e6fc;
        font-size: 1.5rem;
        }
        & ul {
        & li {
            padding: 8px 12px;
            ::before {
            content: '\\203A';
            color: ${primaryHoverColor};
            margin-right: 15px;
            font-size: 24px;
            }
            & a:hover {
            color: ${primaryHoverColor};
            }
        }
        }
    }
    & div.contact-details {
        width: 25%;
        gap: 20px;
        & h4 {
        color: #c8e6fc;
        font-size: 1.5rem;
        }
        & div.contact-lists {
        gap: 20px;
        & a {
            gap: 20px;
            & svg {
            position: relative;
            top: 3px;
            font-size: 25px;
            color: #5b8eab;
            }
            & span:hover {
            color: ${primaryHoverColor};
            }
        }
        }
    }
    `;
};

export const footerBottomContainerStyles = () => {
	return `
    padding: 20px 30px;
	background-color: rgba(246, 247, 249, 1);
	& p.copyrights {
		color: #12344d;
		& a {
			margin: 0 5px;
		}
	}
	& ul {
		gap: 10px;
		margin: 0 10px;
		& a {
			width: 45px;
			height: 45px;
			border-radius: 50%;
			box-shadow: 0 6px 12px rgb(3 109 136 / 14%);
			&:hover {
				background-color: #46aadc;
				& svg path {
					fill: #fff;
				}
			}
		}
	}
    `;
};
