import { Divider } from 'antd';
import styled from 'styled-components';
import Images from './images';
import galleryContainerStyles from 'styles/gallery/gallery.styles';

const Container = styled.section.attrs({
	className: 'w-screen relative',
})`
	${galleryContainerStyles}
`;

const Gallery = () => {
	return (
		<Container>
			<div className='image-screen'>
				<div className='absolute top-1/2 text-5xl uppercase text-white'>
					Gallery
				</div>
				<Divider className='absolute' />
			</div>
			<Images />
		</Container>
	);
};

export default Gallery;
