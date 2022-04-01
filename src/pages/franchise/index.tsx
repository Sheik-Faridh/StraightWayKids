import styled from 'styled-components';
import DOMPurify from 'dompurify';
import franchiseData from 'mock/franchise.json';
import franchiseContainerStyles from 'styles/franchise/franchise.styles';

const Container = styled.section.attrs({
	className: 'w-screen',
})`
	${franchiseContainerStyles}
`;

const Franchise = () => {
	return (
		<Container>
			<h4 className='text-center text-4xl font-bold dark-blue'>
				Franchise Model
			</h4>
			<div
				className='content text-xl text-gray-600'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(franchiseData.content),
				}}
			/>
			<div className='franchise-list flex justify-center gap-10 py-10'>
				{franchiseData.franchise.map((f) => (
					<div
						key={f.name}
						className='franchise-card rounded shadow-md p-10 text-2xl font-bold capitalize text-gray-700 transform transition duration-500 hover:scale-110'>
						{f.name}
					</div>
				))}
			</div>
		</Container>
	);
};

export default Franchise;
