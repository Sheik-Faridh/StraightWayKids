import { useState } from 'react';
import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';
import DOMPurify from 'dompurify';
import {
	CurriculumElementProps,
	CurriculumElemntState,
	ElementProps,
} from 'typings';
import schoolData from 'mock/school.json';

const ObjectiveContainer = styled.div`
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
		margin-bottom: 15px;
	}
	& p {
		font-weight: 400;
		font-size: 15px;
		line-height: 1.5em;
		color: #777;
		margin-bottom: 15px;
	}
`;

const ElementContainer = styled.div`
	width: 50%;
	& > div {
		width: ${(props: ElementProps) => props.size}em;
		height: ${(props: ElementProps) => props.size}em;
		& ul {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			padding: 0;
			font-size: 14px;
			list-style: none;
			margin: 0;
			border: 5px solid #eaf5f7;
		}
		& div.element-content {
			top: 0;
			& > div {
				width: ${(props: ElementProps) => props.size / 2}em;
				gap: 10px;
				& h2 {
					position: relative;
					font-weight: 500;
					font-size: 32px;
					line-height: 1.3em;
					color: #12344d;
					text-align: center;
					padding-bottom: 15px;
					&::after {
						content: '';
						position: absolute;
						bottom: 0;
						left: 50%;
						-webkit-transform: translateX(-50%);
						-ms-transform: translateX(-50%);
						transform: translateX(-50%);
						width: 41px;
						height: 3px;
						background: #46aadc;
					}
				}
				& p {
					color: #777;
					font-size: 13px;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 4;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
`;

const ElementList = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	border-radius: 50%;
	background: #eaf5f7;
	position: absolute;
	text-align: center;
	top: 50%;
	left: 50%;
	margin: -4em;
	width: 8em;
	height: 8em;
	color: #12344d;
	z-index: 5;
	transform: rotate(
			${(props: CurriculumElementProps) =>
				props.position * Math.ceil(360 / props.count)}deg
		)
		translate(${(props: CurriculumElementProps) => props.size / 2}em)
		rotate(
			${(props: CurriculumElementProps) =>
				-(props.position * Math.ceil(360 / props.count))}deg
		);
	&:hover {
		background: #fff;
		border: 2px solid #eaf5f7;
	}
	& img {
		width: 35%;
	}
	& span {
		font-size: 12px;
	}
`;

const Elements = () => {
	const [curriculumElem, setCurriculumElem] =
		useState<CurriculumElemntState | null>(null);
	const size = 27;

	return (
		<ElementContainer className='flex items-center justify-center' size={size}>
			<div className='relative'>
				<ul className='relative'>
					{schoolData.home_page.curriculum_elements.map((elem, i) => (
						<ElementList
							key={elem.name}
							position={i}
							count={schoolData.home_page.curriculum_elements.length}
							size={size}
							onMouseEnter={() => setCurriculumElem(elem)}
							onMouseLeave={() => setCurriculumElem(null)}
						>
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
	return (
		<ObjectiveContainer>
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
		</ObjectiveContainer>
	);
};

const Curriculum = () => {
	return (
		<div className='flex items-center justify-center w-full'>
			<div className='flex flex-row w-8/12 p-4 shadow-lg bg-white'>
				<Objective />
				<Elements />
			</div>
		</div>
	);
};

export default Curriculum;
