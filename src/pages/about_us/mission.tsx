import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { ReactComponent as MissionIcon } from 'assets/icons/mission.svg';
import aboutUsData from 'mock/about.json';
import missionContainerStyles from 'styles/about_us/mission.style';

const Container = styled.div.attrs({
	className: 'p-10 text-white rounded-r-md',
})`
	${missionContainerStyles}
`;

const Mission = () => {
	return (
		<Container>
			<div className='heading flex gap-5 items-center justify-center mb-4'>
				<div className='text-wrapper'>
					<h2 className='text-4xl text-center'>Mission</h2>
				</div>
				<div className='icon-wrapper'>
					<MissionIcon />
				</div>
			</div>
			<div
				className='mission-statement-wrapper tracking-widest'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(aboutUsData.mission),
				}}
			/>
		</Container>
	);
};

export default Mission;
