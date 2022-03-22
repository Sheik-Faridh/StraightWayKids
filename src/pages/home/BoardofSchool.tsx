import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { BoardSchoolMemberModel } from 'typings';
import boardOfSchoolStyles from 'styles/home/board_of_school.styles';
import { RootState } from 'store';

const Container = styled.section`
	${boardOfSchoolStyles}
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
	const home_page = useSelector((state: RootState) => state.home);
	const { correspondent, principal } = home_page.boardOfSchool;

	return (
		<Container className='flex flex-col justify-center w-screen'>
			<Member {...correspondent} />
			<Member {...principal} />
		</Container>
	);
};

export default BoardofSchool;
