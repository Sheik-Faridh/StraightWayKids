const boardOfSchoolStyles = () => {
	return `
    gap: 30px;
	background-color: #e7ecec;
	padding: 3em 1em;
	& > div.board-member-container {
		gap: 20px;
		& h1 {
			font-size: 2em;
			color: #12344d;
		}
		& > div.user-info-wrapper {
			padding: 2.5em;
			gap: 20px;
			& > div.user-info {
				gap: 10px;
				& > div.img-wrapper {
					width: 110px;
					height: 110px;
				}
				& h5.surname {
					color: #7f93a0;
				}
				& small {
					font-size: 40%;
					color: #7b8186;
				}
			}
			& > div.about-container {
				font-family: National-Book, National-Medium, sans-serif;
				font-size: 16px;
				line-height: 2em;
				color: #12344d;
			}
		}
	}
    `;
};

export default boardOfSchoolStyles;
