import { CurriculumElementProps, ElementProps } from 'typings';

export const containerStyles = () => {
	return `
    & .headings {
		& > h4 {
			display: flex;
			flex-direction: row;
			font-style: italic;
			font-size: 22px;
			color: #3b4757;

			&:before {
				content: '';
				flex: 0 1 50px;
				border-bottom: 3px solid #46aadc;
				margin: auto 0;
				margin-right: 10px;
			}
		}
		& > h1 {
			font-family: 'Arabic';
			font-size: 52px;
			line-height: 1.3em;
			color: #12344d;
			margin-bottom: 15px;
		}
	}
    `;
};

export const objectiveContainerStyles = () => {
	return `
    width: 50%;
	& p {
		font-weight: 400;
		font-size: 15px;
		line-height: 1.5em;
		color: #777;
		margin-bottom: 15px;
	}
    `;
};

export const elementContainerStyles = ({ ...props }: ElementProps) => {
	const { size } = props;
	return `
    width: 50%;
	& > div {
		width: ${size}em;
		height: ${size}em;
		bottom: 20px;
		& ul {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			padding: 0;
			font-size: 14px;
			list-style: none;
			margin: 0;
			border: 5px solid #eaf5f7;
		}
		& div.element-content {
			top: 0;
			& > div {
				width: ${size / 2}em;
				gap: 10px;
				& h2 {
					position: relative;
					font-weight: 500;
					font-size: 32px;
					line-height: 1.3em;
					color: #12344d;
					text-align: center;
					padding-bottom: 15px;
					&::after {
						content: '';
						position: absolute;
						bottom: 0;
						left: 50%;
						-webkit-transform: translateX(-50%);
						-ms-transform: translateX(-50%);
						transform: translateX(-50%);
						width: 41px;
						height: 3px;
						background: #46aadc;
					}
				}
				& p {
					color: #777;
					font-size: 13px;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 4;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
    `;
};

export const elementListStyles = ({ ...props }: CurriculumElementProps) => {
	const { count, position, size } = props;
	return `
    display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	border-radius: 50%;
	background: #eaf5f7;
	position: absolute;
	text-align: center;
	top: 50%;
	left: 50%;
	margin: -4em;
	width: 8em;
	height: 8em;
	color: #12344d;
	z-index: 5;
	transform: rotate(${position * Math.ceil(360 / count)}deg) translate(${
		size / 2
	}em) rotate(${-(position * Math.ceil(360 / count))}deg);
	&:hover {
		background: #fff;
		border: 2px solid #eaf5f7;
	}
	& img {
		width: 35%;
	}
	& span {
		font-size: 12px;
	}
    `;
};
