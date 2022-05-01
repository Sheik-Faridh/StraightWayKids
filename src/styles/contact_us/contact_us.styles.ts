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

            & > div {
                transform: translate(-50%, -50%);
            }
        }

        & > div.contact-details-container {
            margin: 2.5% 10.5% 0.5%;
            padding: 30px 0;
            height: 60vh;
        }
    `;
};

export default contactUsContainerStyles;
