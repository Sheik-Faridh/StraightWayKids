const videoContainerStyles = () => {
	return `
    & .img-wrapper {
		z-index: -2;
	}
	& .overlay {
		background-color: #000408;
		opacity: 0.8;
		transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
		z-index: -1;
	}
	& h2 {
		font-size: 3em;
		color: #fff;
	}
	& p {
		color: #fff;
	}
	& .basis-full {
		flex-basis: 100%;
	}
	& iframe {
		width: 560px;
		height: 315px;
	}

	@media screen and (max-width: 1024px){
		& div.video-wrapper {
			flex-direction: column;
			& h2 {
				font-size: 2em;
			}
			& .text-wrapper * {
				width: 70%;
			}
		}
	}

	@media only screen and (max-width: 425px){
		& iframe {
			width: auto;
			height: 290px;
		}
	}
    `;
};

export default videoContainerStyles;
