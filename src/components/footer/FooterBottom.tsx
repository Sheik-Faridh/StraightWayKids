import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { SocialMedia, SocialMediaLink } from 'typings';
import { RootState } from 'store';
import { footerBottomContainerStyles } from 'styles/layout/footer.styles';

const getSocialMediaLists = (social_media: SocialMedia): SocialMediaLink[] => [
	{
		name: 'Facebook',
		icon: <FaFacebookF color='#4053A0' />,
		link: social_media.facebook,
	},
	{
		name: 'Twitter',
		icon: <AiOutlineTwitter color='#5AD7F7' size='1.5em' />,
		link: social_media.twitter,
	},
	{
		name: 'Instagram',
		icon: <InstagramIcon />,
		link: social_media.instagram,
	},
	{
		name: 'Youtube',
		icon: <AiFillYoutube color='#F61C0D' size='1.5em' />,
		link: social_media.youtube,
	},
];

const Container = styled.div`
	${footerBottomContainerStyles}
`;

const FooterBottom = () => {
	const commonDetails = useSelector((state: RootState) => state.common);
	const socialMediaLists = getSocialMediaLists(commonDetails.social_media);

	return (
		<Container className='flex justify-around	items-center'>
			<p className='copyrights m-0'>
				© 2021 Developed By
				<a
					href={commonDetails.developed_by.link}
					target='_blank'
					rel='noreferrer'>
					{commonDetails.developed_by.name}
				</a>
				. All Right Reserved
			</p>
			<div className='contact-details'>
				Follow us:
				<ul className='inline-flex'>
					{socialMediaLists.map((media) => (
						<li key={media.name}>
							<a className='flex justify-center items-center' href={media.link}>
								{media.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

export default FooterBottom;
