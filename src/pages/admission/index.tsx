import styled from 'styled-components';
import Form from './form';
import admissionContainerStyles from 'styles/admission/admission.styles';

const Container = styled.section.attrs({
	className: 'w-screen min-h-screen p-10',
})`
	${admissionContainerStyles}
`;

const Admission = () => {
	return (
		<Container>
			<Form />
		</Container>
	);
};

export default Admission;
