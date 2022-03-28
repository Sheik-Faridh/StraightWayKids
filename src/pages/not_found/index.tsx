import styled from 'styled-components';
import notFoundImage from 'assets/images/not-found.gif';
import notFoundContainerStyles from 'styles/not_found/not_found.styles';

const Container = styled.section.attrs({ className: 'w-screen relative p-10' })`
	${notFoundContainerStyles}
`;

const NotFound = () => {
	return (
		<Container>
			<div className='flex justify-center items-center'>
				<div className='w-1/2 rounded shadow-lg px-5 py-10 bg-white'>
					<div className='image-wrapper'>
						<img src={notFoundImage} alt='Not Found' />
					</div>
					<div className='text-center mt-5'>
						<h4 className='title flex items-center gap-2 flex-col text-4xl dark-blue uppercase'>
							Page Not Found.
						</h4>
						<p className='dark-blue text-base m-0'>
							Maybe this page used to exist or you just spelled something wrong.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default NotFound;
