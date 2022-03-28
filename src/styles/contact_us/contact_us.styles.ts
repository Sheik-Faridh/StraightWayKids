import contactUsBg from 'assets/images/contact-us.avif';

const contactUsContainerStyles = () => {
	return `
        position: relative;
        top: 90px;
        margin-bottom: 90px;
        min-height: calc(100vh - 575px);

        & > div.image-screen {
            position: relative;
            top: 50px;
            margin-bottom: 50px;
            background-image: url(${contactUsBg});
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            padding: 35% 0% 0% 0%;

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
