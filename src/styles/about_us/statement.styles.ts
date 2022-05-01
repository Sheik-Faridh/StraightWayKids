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

		@media screen and (max-width: 1116px){
			position: relative;
			flex-flow: column;

			& > div.image-wrapper {
				height: auto;

				& img {
					object-fit: cover;
					width: 100%;
					height: 300px;
				}
			}
			& > .statement-wrapper {
				padding: 10px;
				& h2 {
					position: absolute;
					bottom: 90%;
					z-index: 3;
					color: #fff;
					font-size: 35px;
					left: 25px;
				}
			}
		}
	}
    `;
};

export default statementContainerStyles;
