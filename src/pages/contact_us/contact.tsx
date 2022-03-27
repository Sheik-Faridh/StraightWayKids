import { SiGmail } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import styled from 'styled-components';
import contactUsData from 'mock/contact_us.json';
import contactContainerStyles from 'styles/contact_us/contact.styles';

const Container = styled.div.attrs({
	className: 'dark-blue shadow-md rounded',
})`
	${contactContainerStyles}
`;

const Contact = () => {
	return (
		<Container>
			<h2 className='text-4xl dark-blue'>Get in touch</h2>
			<p className='text-base dark-blue'>
				Want to get in touch? we'd love to hear from you. Here's how you can
				reach us.
			</p>
			<div className='contact-details bg-white rounded shadow-lg p-4'>
				<p className='text-lg'>
					<SiGmail className='mail-icon' /> {contactUsData.email}
				</p>
				<p className='text-lg'>
					<BsTelephoneFill className='phone-icon' />{' '}
					{contactUsData.phone_number}
				</p>
				<h4 className='text-lg dark-blue font-bold'>
					<MdOutlineAccessTimeFilled className='time-icon' />
					Timings
				</h4>
				<div className='details'>
					{contactUsData.timings.map((t, i) => (
						<p className='text-lg' key={i}>
							<b>{t.from}</b>
							{t.to ? ' to ' : ''}
							<b>{t.to}</b> – {t.startTime} to {t.endTime}
						</p>
					))}
				</div>
			</div>
		</Container>
	);
};

export default Contact;
