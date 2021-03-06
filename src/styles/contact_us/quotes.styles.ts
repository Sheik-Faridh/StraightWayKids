const quotesContainerStyles = () => {
	return `
        padding: 60px;
        background-color: #e6edf1;

        @media screen and (max-width: 1024px){
            padding: 40px;
        }
        @media screen and (max-width: 800px){
            padding: 20px;
        }

        & div.wrapper {
            background-color: #fff;

            @media screen and (max-width: 1470px){
                width: 60%;
            }
            @media screen and (max-width: 1200px){
                width: 70%;
            }
            @media screen and (max-width: 1024px){
                width: 90%;
            }
            @media screen and (max-width: 800px){
                width: 95%;
            }
        }

        & blockquote {
            position: relative;
            align-self: center;
            margin: 0;

            &::before {
                content: "\\201C";
                color: #b0cee7;
                font-size: 4em;
                position: absolute;
                left: 10px;
                top:-10px;
                z-index: 10;
            }

            & h1 {
                font-size: 2.8rem;
                line-height: 1;

                @media screen and (max-width: 768px){
                    font-size: 2rem;
                }

                @media screen and (max-width: 600px){
                    font-size: 1.5rem;
                }

                &::before {
                    content:"";
                    position: absolute;
                    width: 80px;
                    border: 3px solid #fff;
                    bottom: -3px;
                    left: 50px;
                    z-index: 2;
                }

                &::after {
                    content:"";
                    position: absolute;
                    border: 2px solid #badaf1;
                    border-radius: 0 50px 0 0;
                    width: 60px;
                    height: 60px;
                    bottom: -60px;
                    left: 50px;
                    border-bottom: none;
                    border-left: none;
                    z-index: 3; 
                }
            }

            & h4 {
                font-family: 'Arabic';
                position: relative;
                font-size: 1.8rem;
                font-weight: 400;
                line-height: 1.2;
                margin: 0;
                padding-top: 15px;
                z-index: 1;
                text-align: left;
                left: 160px;

                @media screen and (max-width: 768px){
                    font-size: 1.2rem;
                }
                @media screen and (max-width: 600px){
                    font-size: 1rem;
                }
                @media screen and (max-width: 536px){
                    left: 140px;
                }
            }
        }

        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
        & .quote-text {
            position: relative;
            font-family:Open Sans;
            color: #002540;
            font-weight: 100;
            font-style: italic;
            text-transform: lowercase;
            margin: 0;
            border: 2px solid #fff;
            border: solid 2px #badaf1;
            border-radius:20px;
            padding: 25px;
            background-color: #f0f8fb7d;

            & > .image-wrapper {
                width: 40px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 10px;
            }
        }
    `;
};

export default quotesContainerStyles;
