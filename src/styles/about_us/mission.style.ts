const missionContainerStyles = () => {
	return `
    flex-basis: 100%;
	background-color: #20375e;
	& > div.heading {
		& div.text-wrapper > h2 {
			color: #85cebc;
		}
		& > div.icon-wrapper {
			width: 80px;
		}
	}
	& > div.mission-statement-wrapper {
		& ul {
			list-style-type: disc;
			list-style-position: inside;
		}
	}
    `;
};

export default missionContainerStyles;
