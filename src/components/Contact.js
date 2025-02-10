import emailjs from '@emailjs/browser';
import React from 'react';
import '../css/Contact.css';

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					alert('Votre message a été envoyé avec succès 🙂');
				},
				(error) => {
					alert("Échec de l'envoi du message 😢");
				}
			);
	}

	return (
		<div className='Contact'>
			<div className='contact-container wave-title'>
				<form
					className='contact-form form-contact white-font'
					onSubmit={sendEmail}
				>
					<div className='row center-align'>
						<h2 className='fade-in'>
							<em className='contact-earwig wave-title'>Me contacter</em>
						</h2>
					</div>
					<br />
					<div className='row'>
						<div className='input-field col s12 l12'>
							{' '}
							<i className='material-icons prefix' name='from_name'>
								account_circle
							</i>
							<input
								id='icon_prefix'
								type='text'
								className='validate'
								name='from_name'
								required
							/>
							<label htmlFor='icon_prefix'>Nom</label>
						</div>
						<div className='input-field col s12 l12'>
							<i className='material-icons prefix' name='reply_to'>
								email
							</i>
							<input
								id='icon_email'
								type='email'
								className='validate'
								name='reply_to'
								required
							/>
							<label htmlFor='icon_email'>Email</label>
						</div>

						<div className='input-field col s12 l12'>
							<i className='material-icons prefix' name='message_html'>
								mode_edit
							</i>
							<textarea
								id='icon_prefix2'
								className='materialize-textarea'
								name='message'
								required
							></textarea>
							<label htmlFor='icon_prefix2'>Message</label>
						</div>
					</div>

					<div className='row center-align wave-title'>
						<button
							className='waves-effect waves-light btn-large pulse'
							type='submit'
							name='action'
						>
							Envoyer
							<i className='material-icons right wave-title'>send</i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
