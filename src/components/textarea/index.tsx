import { TextAreaProps } from 'typings/atoms';

const TextArea: React.FC<TextAreaProps> = (props) => {
	return (
		<div className='m-0'>
			<label
				className='block dark-blue my-1 font-semibold'
				aria-required={props.required}>
				{props.label}
			</label>
			<textarea
				className='w-full p-1'
				placeholder={`Enter ${props.label}`}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				autoComplete='off'
				rows={5}
			/>
		</div>
	);
};

export default TextArea;
