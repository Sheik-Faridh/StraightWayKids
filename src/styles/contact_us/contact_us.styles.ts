import contactUsBg from 'assets/images/contact-us.avif';

const contactUsContainerStyles = () => {
	return `
        padding: 0;
        margin-top: 140px;
        min-height: calc(100vh - 575px);

        & > div.image-screen {
            background-image: url(${contactUsBg});
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            height: 80vh;

            @media screen and (max-width: 608px){
                & div {
                    font-size: 36px;
                }
            }

            & > div {
                transform: translate(-50%, -50%);
            }
        }

        & > div.contact-details-container {
            margin: 2.5% 10.5% 0.5%;
            padding: 30px 0;
            height: 60vh;

            @media screen and (max-width: 1556px) {
                margin: 2.5% 5.5% 0.5%;
                padding: 20px 0;
                flex-flow: row;
            }

            @media screen and (max-width: 1200px) {
                height: 100vh;
                flex-flow: column;
            }
        }
    `;
};

export default contactUsContainerStyles;
