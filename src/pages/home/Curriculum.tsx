import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';
import DOMPurify from 'dompurify';
import schoolData from 'mock/school.json';

const Metadata = styled.div`
  width: 50%;
  & h4 {
    display: flex;
    flex-direction: row;
    font-style: italic;
    font-size: 22px;
    color: #3b4757;

    &:before {
      content: '';
      flex: 0 1 50px;
      border-bottom: 3px solid #46aadc;
      margin: auto 0;
      margin-right: 10px;
    }
  }
  & h1 {
    font-family: 'Arabic';
    font-size: 52px;
    line-height: 1.3em;
    color: #12344d;
  }
  & p {
    font-weight: 400;
    font-size: 15px;
    line-height: 1.5em;
    color: #777;
    margin-bottom: 15px;
  }
`;

const ELements = () => {
  return (
    <div className='curriculum-element-container'>
      <ul></ul>
    </div>
  );
};

const Curriculum = () => {
  return (
    <div className='flex flex-row items-center p-4'>
      <Metadata>
        <h4>{schoolData.home_page.title}</h4>
        <div className='pl-3'>
          <h1>
            {schoolData.name} {schoolData.type}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(schoolData.home_page.objective),
            }}
          />
          <a href='/about-us' className='readmore'>
            Read More <BsArrowRightShort />
          </a>
        </div>
      </Metadata>
      <ELements />
    </div>
  );
};

export default Curriculum;
