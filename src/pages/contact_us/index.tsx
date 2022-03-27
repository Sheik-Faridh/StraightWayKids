import styled from 'styled-components';
import contactUsContainerStyles from 'styles/contact_us/contact_us.styles';
import Contact from './contact';
import Map from './map';
import Quotes from './quotes';

const Container = styled.section.attrs({
	className: 'w-screen',
})`
	${contactUsContainerStyles}
`;

const ContactUs = () => {
	return (
		<Container>
			<div className='image-screen'>
				<div className='absolute top-1/2 left-1/2 text-5xl uppercase text-white'>
					Contact Us
				</div>
			</div>
			<div className='contact-details-container flex flex-row gap-8'>
				<Contact />
				<Map />
			</div>
			<Quotes />
		</Container>
	);
};

export default ContactUs;
