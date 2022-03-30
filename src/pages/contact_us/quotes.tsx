import styled from 'styled-components';
import duaHandsImage from 'assets/images/dua-hands.png';
import contactUsData from 'mock/contact_us.json';
import quotesContainerStyles from 'styles/contact_us/quotes.styles';

const Container = styled.div`
	${quotesContainerStyles}
`;

const Quotes = () => {
	return (
		<Container>
			<div className='flex flex-col items-center justify-center gap-10'>
				<div className='wrapper w-1/2 p-10 text-center rounded shadow-md'>
					<blockquote>
						<h1 className='quote-text'>{contactUsData.hadith.content}</h1>
						<h4 className='dark-blue'> - {contactUsData.hadith.by}</h4>
					</blockquote>
				</div>
				<div className='wrapper w-1/2 p-10 text-center rounded shadow-md'>
					<h1 className='quote-text text-xl'>
						{contactUsData.dua}
						<div className='image-wrapper'>
							<img src={duaHandsImage} alt='Dua Hands' />
						</div>
					</h1>
				</div>
			</div>
		</Container>
	);
};

export default Quotes;
