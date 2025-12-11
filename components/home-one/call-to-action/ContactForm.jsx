"use client";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="aximo-form-field2">
				<Field error={errors.fname}>
					<input
						{...register("fname", { required: "Nome completo é obrigatório." })}
						type="text"
						name="fname"
						id="fname"
						placeholder="Digite seu nome completo"
					/>
				</Field>
			</div>
			<div className="aximo-form-field2">
				<Field error={errors.email}>
					<input
						{...register("email", { required: "E-mail é obrigatório." })}
						type="email"
						name="email"
						id="email"
						placeholder="Digite seu e-mail"
					/>
				</Field>
			</div>
			<div className="aximo-form-field2">
				<textarea name="textarea" placeholder="Escreva sua mensagem ou dúvidas sobre seu projeto"></textarea>
			</div>
			<button id="aximo-submit-btn2" type="submit">
				<span className="aximo-label-up">Enviar mensagem</span>
				<span className="aximo-label-up">Enviar mensagem</span>
			</button>
		</form>
	);
}

export default ContactForm;



