import styled from 'styled-components';
import DOMPurify from 'dompurify';
import schoolData from 'mock/school.json';
import { BoardSchoolMemberModel } from 'typings';

const Container = styled.section`
	gap: 30px;
	background-color: #eff8fa;
	padding: 3em 1em;
	& > div.board-member-container {
		gap: 20px;
		& h1 {
			font-size: 2em;
			color: #12344d;
		}
		& > div.user-info-wrapper {
			padding: 2.5em;
			gap: 20px;
			& > div.user-info {
				gap: 10px;
				& > div.img-wrapper {
					width: 110px;
					height: 110px;
				}
				& h5.surname {
					color: #7f93a0;
				}
				& small {
					font-size: 40%;
					color: #7b8186;
				}
			}
			& > div.about-container {
				font-family: National-Book, National-Medium, sans-serif;
				font-size: 16px;
				line-height: 2em;
				color: #12344d;
			}
		}
	}
`;

const Member = (props: BoardSchoolMemberModel) => {
	return (
		<div className='flex flex-col w-full items-center justify-center board-member-container'>
			<h1 className='capitalize'>{props.title}</h1>
			<div className='inline-flex flex-col w-1/2 items-center justify-center bg-white shadow-lg user-info-wrapper'>
				<div className='user-info flex flex-col items-center'>
					<div className='img-wrapper'>
						<img
							className='w-full h-full rounded-full'
							src={require(`assets/${props.avatar}`).default}
							alt={props.name}
						/>
					</div>
					<h5 className='surname'>{props.surname}</h5>
					<h1 className='uppercase name'>
						{props.name} <small className='degree'>{props.degree}</small>
					</h1>
				</div>
				<div
					className='about-container'
					dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.about) }}
				/>
			</div>
		</div>
	);
};

const BoardofSchool = () => {
	const { correspondent, principal } = schoolData.home_page.boardOfSchool;

	return (
		<Container className='flex flex-col justify-center w-screen'>
			<Member {...correspondent} />
			<Member {...principal} />
		</Container>
	);
};

export default BoardofSchool;
