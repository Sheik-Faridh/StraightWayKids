import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { ReactComponent as VisionIcon } from 'assets/icons/vision.svg';
import aboutUsData from 'mock/about.json';
import visionContainerStyles from 'styles/about_us/vision.styles';

const Container = styled.div.attrs({
	className: 'p-10 text-white rounded-l-md',
})`
	${visionContainerStyles}
`;

const Vision = () => {
	return (
		<Container>
			<div className='heading flex gap-5 items-center mb-4 justify-center'>
				<div className='text-wrapper'>
					<h2 className='text-4xl text-center'>Vision</h2>
				</div>
				<div className='icon-wrapper flex justify-center'>
					<VisionIcon />
				</div>
			</div>
			<div
				className='vision-statement-wrapper tracking-widest'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(aboutUsData.vision),
				}}
			/>
		</Container>
	);
};

export default Vision;
