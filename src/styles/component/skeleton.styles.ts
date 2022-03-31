export const headerSkeletonContainerStyles = () => {
	return `
    background-color: rgb(232 237 247);
	height: 90px;
	padding: 10px 30px;

	& .animate-pulse {
		width: 80%;
		& > div {
			flex-basis: 100%;
		}
	}

	& .bg-slate-200 {
		background-color: rgb(188 199 215);
	}
    `;
};

export const footerSkeletonContainerStyles = () => {
	return `
	& .animate-pulse {
		padding: 10px 30px;

		&.footer-top {
			background-color: rgb(224 227 235);
			height: 230px;
			width: 100%;

			& > div {
				width: 70%;
			}

			& div.basis-full {
				flex-basis: 100%;
			}
		}
		&.footer-bottom {
			background-color: rgb(220 224 231);

			& > div {
				height: 40px;
				width: 40%;
			}
		}
	}

	& .bg-slate-200 {
		background-color: rgb(188 199 215);
	}
	`;
};
