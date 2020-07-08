import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'template_UDg6rOzX',
				e.target,
				'user_umFWRdwZ7MIp2yDqT5hV8'
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
			<form
				className='contact-form form-contact white-font'
				onSubmit={sendEmail}
			>
				<div className='row blue-text'>
					<h2>
						<em class='contact-earwig'>Me contacter</em>
					</h2>
				</div>
				<br />
				<div className='row'>
					<div className='input-field col s12 l12 green-text text-accent-4'>
						<i className='material-icons prefix'>account_circle</i>
						<input
							id='icon_prefix'
							type='text'
							className='validate blue-font'
							name='from_name'
							required
						/>
						<label htmlFor='icon_prefix'>Nom</label>
					</div>
					<div className='input-field col s12 l12 yellow-text text-accent-4'>
						<i className='material-icons prefix'>phone</i>
						<input
							id='icon_telephone'
							type='tel'
							className='validate green-font'
							name='contact_number'
							required
						/>
						<label htmlFor='icon_telephone'>Telephone</label>
					</div>

					<div className='input-field col s12 l12 materialize grey-text'>
						<i className='material-icons prefix'>email</i>
						<input
							id='icon_email'
							type='email'
							className='validate white-font'
							name='reply_to'
							required
						/>
						<label htmlFor='icon_email'>Email</label>
					</div>

					<div className='input-field col s12 l12 materialize blue-text'>
						<i className='material-icons prefix'>mode_edit</i>
						<textarea
							id='icon_prefix2'
							className='materialize-textarea textarea-height validate yellow-font'
							name='message_html'
							required
						></textarea>
						<label htmlFor='icon_prefix2'>Message</label>
					</div>
				</div>

				<div className='row'>
					<button
						class='waves-effect waves-light btn-large btn-large pulse'
						type='submit'
						name='action'
					>
						Envoyer
						<i class='material-icons right'>send</i>
					</button>
				</div>
			</form>
		</div>
	);
}
