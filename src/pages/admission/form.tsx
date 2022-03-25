import CustomSelect from 'components/custom_select';
import CustomDatePicker from 'components/datepicker';
import TextArea from 'components/textarea';
import TextField from 'components/textfield';
import admissionData from 'mock/admission.json';

const Form = () => {
	return (
		<div className='form-container flex justify-center items-center w-full h-full'>
			<div className='form-wrapper w-3/5 h-auto bg-gray-50 rounded shadow-lg p-6'>
				<h2 className='text-3xl dark-blue text-center my-5'>Admission Form</h2>
				<form className='flex flex-col gap-10'>
					<div className='fields-wrapper grid grid-cols-2 gap-5'>
						{admissionData.form.map((f) => {
							switch (f.field) {
								case 'textarea':
									return <TextArea {...f} key={f.name} />;
								case 'date':
									return (
										<CustomDatePicker
											label={f.label}
											required={f.required}
											key={f.name}
										/>
									);
								case 'select':
									return (
										<CustomSelect
											options={f.options || []}
											label={f.label}
											required={f.required}
											key={f.name}
										/>
									);
								default:
									return <TextField {...f} key={f.name} />;
							}
						})}
					</div>
					<div className='btn-wrapper text-center'>
						<button className='primary'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
