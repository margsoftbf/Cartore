import { ChangeEvent, FormEvent, useState } from 'react';
import style from './Contact.module.css';
import axios from 'axios';

type FormState = {
	email: string;
	name: string;
	message: string;
};

type ServiceMessage = {
	color: string;
	text: string;
};
export function Contact() {
	const formId = 'eM8DcPkg';
	const formSparkUrl = `https://submit-form.com/${formId}`;

	const initialFormState = {
		email: '',
		name: '',
		message: '',
	};

	const [formState, setFormState] = useState<FormState>(initialFormState);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const [message, setMessage] = useState<ServiceMessage>();

	const submitForm = async (event: FormEvent) => {
		event.preventDefault();
		setSubmitting(true);
		await postSubmission();
		setSubmitting(false);
	};

	const postSubmission = async () => {
		const payload = {
			...formState,
		};

		try {
			const result = await axios.post(formSparkUrl, payload);
			console.log(result);
			setMessage({
				color: 'green',
				text: 'Thanks for submit',
			});
		} catch (error) {
			console.log(error);
			setMessage({
				color: 'red',
				text: 'Sorry, there was a problem. Please try again.',
			});
		}
	};

	const updateFormControl = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = event.target;
		const key = id as keyof FormState;
		const updatedFormState = { ...formState };
		updatedFormState[key] = value;
		setFormState(updatedFormState);
	};

	return (
		<div className={`${style.Container}`}>
			<h1 className={`${style.Title}`}>Contact us</h1>
			{message && (
				<div className={`my-4 text-white w-full p-4 ${message.color}`}>
					{message.text}
				</div>
			)}
			<div className={`${style.formContainer}`}>
				<form onSubmit={submitForm}>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							onChange={updateFormControl}
							type='text'
							id='name'
							value={formState?.name}
							className={`${style.input}`}
						/>
					</div>
					<div>
						<label htmlFor='email'>E-mail</label>
						<input
							onChange={updateFormControl}
							type='text'
							id='email'
							value={formState?.email}
							className={`${style.input}`}
						/>
					</div>
					<div>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							onChange={updateFormControl}
							value={formState?.message}
							className={`${style.textArea}`}
						></textarea>
					</div>
					<button disabled={submitting} className={`${style.btn}`}>
						{submitting ? 'Submitting...' : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	);
}
