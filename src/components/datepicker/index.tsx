import { DatePicker } from 'antd';
import { CustomDatePickerProps } from 'typings/atoms';

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
	return (
		<div className='m-0'>
			<label
				className='block dark-blue my-1 font-semibold'
				aria-required={props.required}>
				{props.label}
			</label>
			<DatePicker
				placeholder={`Choose ${props.label}`}
				style={{ width: '100%' }}
			/>
		</div>
	);
};

export default CustomDatePicker;
