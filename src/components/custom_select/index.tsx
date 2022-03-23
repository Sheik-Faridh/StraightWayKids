import { Select } from 'antd';
import { CustomSelectProps } from 'typings/atoms';

const { Option } = Select;

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
	return (
		<div className='m-0'>
			<label
				className='block dark-blue my-1 font-semibold'
				aria-required={props.required}>
				{props.label}
			</label>
			<Select
				showSearch
				placeholder={`Select ${props.label}`}
				optionFilterProp='children'>
				{props.options.map((o) => (
					<Option key={o.value} value={o.value}>
						{o.name}
					</Option>
				))}
			</Select>
		</div>
	);
};

export default CustomSelect;
