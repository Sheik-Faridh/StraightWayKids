const statementContainerStyles = () => {
	return `
    & > div.wrapper {
		background-color: #f0f7fb;
		& > div {
			flex-basis: 100%;
		}
		& > div.image-wrapper {
			height: 75vh;

			& img {
				width: 100%;
				height: 100%;
			}
		}
		& > .statement-wrapper {
			color: #12344d;
			font-family: National-Book, National-Medium, sans-serif;
			letter-spacing: 1px;
		}
	}
    `;
};

export default statementContainerStyles;
