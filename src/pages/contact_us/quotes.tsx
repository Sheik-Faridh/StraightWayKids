import styled from 'styled-components';
import duaHandsImage from 'assets/images/dua-hands.png';
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
						<h1 className='quote-text'>
							HE WHO TRAVELS IN SEARCH OF KNOWLEDGE, TO HIM ALLAH SHOWS THE WAY
							OF PARADISE
						</h1>
						<h4 className='dark-blue'> - PROPHET MUHAMMAD (S.A.W.)</h4>
					</blockquote>
				</div>
				<div className='wrapper w-1/2 p-10 text-center rounded shadow-md'>
					<h1 className='quote-text text-xl'>
						We earnestly request you all to pray Allah (SWT) to give us strength
						and right guidance so as to deliver a meaningful learning experience
						to the student community, Ameen!
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
