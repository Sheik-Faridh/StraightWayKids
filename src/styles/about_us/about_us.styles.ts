const aboutUsContainerStyles = () => {
	return `
        margin-top: 130px;
        padding: 0;
        min-height: calc(100vh - 575px);

        & .vision-mission-wrapper {
            @media screen and (max-width: 600px){
                flex-flow: column;
            }
        }
    `;
};

export default aboutUsContainerStyles;
