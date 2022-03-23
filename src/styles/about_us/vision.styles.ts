const visionContainerStyles = () => {
	return `
        flex-basis: 100%;
        background-color: #142a4f;
        & > div.heading {
            & div.text-wrapper > h2 {
                color: #85cebc;
            }
            & > div.icon-wrapper {
                width: 80px;
            }
        }
    `;
};

export default visionContainerStyles;
