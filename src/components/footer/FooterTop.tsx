import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import footerImg from 'assets/images/footerbg.png';
import schoolImg from 'assets/images/logo.png';
import { RootState } from 'store';
import { footerTopContainerStyles } from 'styles/layout/footer.styles';

const Container = styled.div`
	${footerTopContainerStyles}
`;

const Logo = () => {
	const commonDetails = useSelector((state: RootState) => state.common);
	return (
		<div className='logo-wrapper inline-flex flex-row'>
			<div className='img-wrapper'>
				<img src={schoolImg} className='w-full h-full' alt='School Logo' />
			</div>
			<div className='flex flex-col justify-center school-name'>
				<h2>{commonDetails.name}</h2>
				<h4>{commonDetails.type}</h4>
			</div>
		</div>
	);
};

const Icon = ({ name }: { name: string }) => {
	switch (name) {
		case 'location':
			return <MdLocationOn />;
		case 'phone':
			return <BsTelephoneFill />;
		default:
			return <MdEmail />;
	}
};

const FooterTop = () => {
	const commonDetails = useSelector((state: RootState) => state.common);

	return (
		<Container className='flex flex-row justify-center items-center relative w-screen'>
			<div className='bg-wrapper absolute w-full h-full'>
				<img src={footerImg} className='w-full h-full' alt='Footer' />
			</div>
			<div className='flex flex-col school-details'>
				<Logo />
				<p
					className='text-white'
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(commonDetails.footer_details.about),
					}}></p>
			</div>
			<div className='flex flex-col quick-links'>
				<h4>Quick Links</h4>
				<ul className='flex flex-wrap'>
					{commonDetails.footer_details.quick_links.map((l) => (
						<li className='w-1/2 text-white' key={l.name}>
							<a href={l.path}>{l.name}</a>
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col contact-details'>
				<h4>Our Contacts</h4>
				<div className='flex flex-col contact-lists'>
					{Object.entries(commonDetails.footer_details.contact_lists).map(
						([k, v]) => (
							<a key={k} href={v.link} className='flex flex-row'>
								<Icon name={k} />
								<span
									className='text-white'
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(v.text),
									}}></span>
							</a>
						)
					)}
				</div>
			</div>
		</Container>
	);
};

export default FooterTop;
