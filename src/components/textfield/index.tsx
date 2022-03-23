import { TextFieldProps } from 'typings/atoms';

const TextField: React.FC<TextFieldProps> = (props) => {
	return (
		<div className='m-0'>
			<label
				className='block dark-blue my-1 font-semibold'
				aria-required={props.required}>
				{props.label}
			</label>
			<input
				className='w-full p-1'
				type={props.type}
				placeholder={`Enter ${props.label}`}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				autoComplete='off'
			/>
		</div>
	);
};

export default TextField;
