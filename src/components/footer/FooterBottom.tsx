import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { SocialMediaLink } from 'typings';
import schoolData from 'mock/school.json';

const socialMediaLists: SocialMediaLink[] = [
  {
    name: 'Facebook',
    icon: <FaFacebookF color='#4053A0' />,
    link: schoolData.social_media.facebook,
  },
  {
    name: 'Twitter',
    icon: <AiOutlineTwitter color='#5AD7F7' size='1.5em' />,
    link: schoolData.social_media.twitter,
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    link: schoolData.social_media.instagram,
  },
  {
    name: 'Youtube',
    icon: <AiFillYoutube color='#F61C0D' size='1.5em' />,
    link: schoolData.social_media.youtube,
  },
];

const Container = styled.div`
  padding: 20px 30px;
  background-color: rgba(246, 247, 249, 1);
  & p.copyrights {
    color: #12344d;
    & a {
      margin: 0 5px;
    }
  }
  & ul {
    gap: 10px;
    margin: 0 10px;
    & a {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      box-shadow: 0 6px 12px rgb(3 109 136 / 14%);
      &:hover {
        background-color: #46aadc;
        & svg path {
          fill: #fff;
        }
      }
    }
  }
`;

const FooterBottom = () => {
  return (
    <Container className='flex justify-around	items-center'>
      <p className='copyrights'>
        © 2021 Developed By
        <a href={schoolData.developed_by.link} target='_blank' rel='noreferrer'>
          {schoolData.developed_by.name}
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
