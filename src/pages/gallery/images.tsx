import styled from 'styled-components';
import galleryData from 'mock/gallery.json';
import imagesContainerStyles from 'styles/gallery/images.styles';

const Container = styled.div.attrs({
	className: 'flex flex-wrap p-16',
})`
	${imagesContainerStyles}
`;

const Images = () => {
	const maxImageCount =
		galleryData.imageList.length > 24
			? 8
			: Math.floor(galleryData.imageList.length / 3);
	const firstCol = galleryData.imageList.slice(0, maxImageCount);
	const secondCol = galleryData.imageList.slice(
		maxImageCount * 1,
		maxImageCount * 2
	);
	const thirdCol = galleryData.imageList.slice(
		maxImageCount * 2,
		maxImageCount * 3
	);
	return (
		<Container>
			<div className='column'>
				{firstCol.map((g) => (
					<img
						src={g.src}
						alt={g.name}
						className='shadow-xl rounded transform transition duration-500 hover:scale-90'
					/>
				))}
			</div>
			<div className='column'>
				{secondCol.map((g) => (
					<img
						src={g.src}
						alt={g.name}
						className='shadow-xl rounded transform transition duration-500 hover:scale-90'
					/>
				))}
			</div>
			<div className='column'>
				{thirdCol.map((g) => (
					<img
						src={g.src}
						alt={g.name}
						className='shadow-xl rounded transform transition duration-500 hover:scale-90'
					/>
				))}
			</div>
		</Container>
	);
};

export default Images;
