import { SelectProps } from 'antd';

export interface TextFieldProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
}

export interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	label: string;
}

export interface CustomSelectProps extends SelectProps {
	options: { name: string; value: string }[];
	label: string;
	required: boolean;
}
