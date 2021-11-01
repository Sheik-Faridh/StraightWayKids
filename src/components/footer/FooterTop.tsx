import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import schoolData from 'mock/school.json';
import footerImg from 'assets/images/footerbg.png';
import schoolImg from 'assets/images/logo.png';

const Container = styled.div`
  height: 400px;
  gap: 40px;
  & div.bg-wrapper {
    z-index: -1;
  }
  & div.school-details {
    width: 25%;
    gap: 20px;
    & div.logo-wrapper {
      gap: 10px;
      & div.img-wrapper {
        width: 100px;
        height: 100px;
      }
      & div.school-name {
        color: #fff;
        font-family: 'Arabic';
        & h2 {
          font-size: 3.5rem;
          line-height: 0.9;
        }
        & h4 {
          font-size: 1.5rem;
        }
      }
    }
  }
  & div.quick-links {
    width: 25%;
    gap: 10px;
    & h4 {
      color: #c8e6fc;
      font-size: 1.5rem;
    }
    & ul {
      & li {
        padding: 8px 12px;
        ::before {
          content: '\\203A';
          color: ${(props) => props.theme.primaryHoverColor};
          margin-right: 15px;
          font-size: 24px;
        }
        & a:hover {
          color: ${(props) => props.theme.primaryHoverColor};
        }
      }
    }
  }
  & div.contact-details {
    width: 25%;
    gap: 20px;
    & h4 {
      color: #c8e6fc;
      font-size: 1.5rem;
    }
    & div.contact-lists {
      gap: 20px;
      & a {
        gap: 20px;
        & svg {
          position: relative;
          top: 3px;
          font-size: 25px;
          color: #5b8eab;
        }
        & span:hover {
          color: ${(props) => props.theme.primaryHoverColor};
        }
      }
    }
  }
`;

const Logo = () => {
  return (
    <div className='logo-wrapper inline-flex flex-row'>
      <div className='img-wrapper'>
        <img src={schoolImg} className='w-full h-full' alt='School Logo' />
      </div>
      <div className='flex flex-col justify-center school-name'>
        <h2>{schoolData.name}</h2>
        <h4>{schoolData.type}</h4>
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
            __html: DOMPurify.sanitize(schoolData.footer_details.about),
          }}
        ></p>
      </div>
      <div className='flex flex-col quick-links'>
        <h4>Quick Links</h4>
        <ul className='flex flex-wrap'>
          {schoolData.footer_details.quick_links.map((l) => (
            <li className='w-1/2 text-white' key={l.name}>
              <a href={l.path}>{l.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col contact-details'>
        <h4>Our Contacts</h4>
        <div className='flex flex-col contact-lists'>
          {Object.entries(schoolData.footer_details.contact_lists).map(
            ([k, v]) => (
              <a key={k} href={v.link} className='flex flex-row'>
                <Icon name={k} />
                <span
                  className='text-white'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(v.text),
                  }}
                ></span>
              </a>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
