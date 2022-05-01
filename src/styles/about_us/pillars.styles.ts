const pillarsContainerStyles = () => {
	return `
        background-color: #edf4f9;
        & > h2 {
            color: #12344d;
        }
        & > div.card-container {
            & div.card {
                flex-basis: 100%;
            }
            & div.card:nth-of-type(1) {
                background-color: #4682b4;
            }
            & div.card:nth-of-type(2) {
                background-color: #87ceeb;
            }
            & div.card:nth-of-type(3) {
                background-color: #6f8faf;
            }
            & div.icon-wrapper {
                height: 250px;
            }
            & div.descriptive-content {
                display: -webkit-box;
                -webkit-line-clamp: 15;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            @media screen and (max-width: 800px) {
                flex-flow: column;
            }
        }
    `;
};

export default pillarsContainerStyles;
