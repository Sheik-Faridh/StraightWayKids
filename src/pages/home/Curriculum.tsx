import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';
import DOMPurify from 'dompurify';
import { CurriculumElementState } from 'typings';
import {
	containerStyles,
	elementContainerStyles,
	elementListStyles,
	objectiveContainerStyles,
} from 'styles/home/curriculum.styles';
import { RootState } from 'store';

const Container = styled.div.attrs({
	className: 'flex items-center justify-center w-full',
})`
	${containerStyles}
`;

const ObjectiveContainer = styled.div`
	${objectiveContainerStyles}
`;

const ElementContainer = styled.div`
	${elementContainerStyles}
`;

const ElementList = styled.li`
	${elementListStyles}
`;

const Elements = () => {
	const curriculum_elements = useSelector(
		(state: RootState) => state.home.curriculum_elements
	);
	const [curriculumElem, setCurriculumElem] =
		useState<CurriculumElementState | null>(null);
	const size = 27;

	return (
		<ElementContainer className='flex items-center justify-center' size={size}>
			<div className='relative'>
				<ul className='relative'>
					{curriculum_elements.map((elem, i) => (
						<ElementList
							key={elem.name}
							position={i}
							count={curriculum_elements.length}
							size={size}
							onMouseEnter={() => setCurriculumElem(elem)}
							onMouseLeave={() => setCurriculumElem(null)}>
							{elem.icon && (
								<img
									src={require(`assets/${elem.icon}`).default}
									alt={elem.icon}
								/>
							)}
							<span>{elem.name}</span>
						</ElementList>
					))}
				</ul>
				<div className='element-content absolute flex justify-center items-center w-full h-full'>
					<div className='flex justify-center items-center flex-col'>
						<h2>
							{curriculumElem ? curriculumElem.name : 'Curriculum Element'}
						</h2>
						{curriculumElem !== null && <p>{curriculumElem.content}</p>}
					</div>
				</div>
			</div>
		</ElementContainer>
	);
};

const Objective = () => {
	const objective = useSelector((state: RootState) => state.home.objective);
	return (
		<ObjectiveContainer>
			<div className='pl-3'>
				<p
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(objective),
					}}
				/>
				<a href='/about-us' className='readmore'>
					Read More <BsArrowRightShort />
				</a>
			</div>
		</ObjectiveContainer>
	);
};

const Curriculum = () => {
	const rootState = useSelector((state: RootState) => state);
	const { home, common } = rootState;
	return (
		<Container>
			<div className='flex flex-col w-9/12 p-4 shadow-lg bg-white'>
				<div className='headings'>
					<h4>{home.title}</h4>
					<h1>
						{common.name} {common.type}
					</h1>
				</div>
				<div className='flex flex-row'>
					<Objective />
					<Elements />
				</div>
			</div>
		</Container>
	);
};

export default Curriculum;
