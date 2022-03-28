import styled from 'styled-components';
import DOMPurify from 'dompurify';
import aboutImage from 'assets/images/about-us.avif';
import aboutUsData from 'mock/about.json';
import statementContainerStyles from 'styles/about_us/statement.styles';

const Container = styled.div`
	${statementContainerStyles}
`;

const Statement = () => {
	return (
		<Container>
			<div className='wrapper flex gap-10'>
				<div className='image-wrapper'>
					<img alt='Img' src={aboutImage} />
				</div>
				<div className='statement-wrapper py-4 pr-4'>
					<h2 className='text-2xl mb-4 font-bold italic'>About Us</h2>
					<div
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(aboutUsData.about_us_statement),
						}}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Statement;
