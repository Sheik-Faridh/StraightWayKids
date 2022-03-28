const notFoundContainerStyles = () => {
	return `
        top: 90px;
        margin-bottom: 90px;
        min-height: calc(100vh - 575px);
        background-color: #e6e9eb;

        & .image-wrapper {
            width: 60%;
            margin: 0 auto;
        }

        & h4.title::after {
            content: "";
            width: 200px;
            border-bottom: 5px solid #16c7a6;
            border-radius: 5px;
        }
    `;
};

export default notFoundContainerStyles;
