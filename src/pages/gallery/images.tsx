import styled from 'styled-components';
import galleryData from 'mock/gallery.json';
import imagesContainerStyles from 'styles/gallery/images.styles';

const Container = styled.div.attrs({
	className: 'flex flex-wrap p-16',
})`
	${imagesContainerStyles}
`;

const Images = () => {
	const firstCol = galleryData.imageList.slice(0, 8);
	const secondCol = galleryData.imageList.slice(8, 16);
	const thirdCol = galleryData.imageList.slice(16, 24);
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
