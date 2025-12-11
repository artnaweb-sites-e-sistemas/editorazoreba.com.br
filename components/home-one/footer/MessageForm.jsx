"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";

function MessageForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const submitForm = async (formData) => {
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch("/contact.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					phone: formData.phone || "",
					textarea: formData.textarea || "",
				}),
			});

			const data = await response.json();

			if (data.success) {
				setSubmitStatus({ type: "success", message: "Mensagem enviada com sucesso!" });
				reset();
			} else {
				setSubmitStatus({ type: "error", message: data.error || "Erro ao enviar mensagem. Tente novamente." });
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus({ type: "error", message: "Erro ao enviar mensagem. Tente novamente." });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<style dangerouslySetInnerHTML={{
				__html: `
					#aximo-submit-btn > span:first-child {
						background: transparent !important;
						width: auto !important;
						height: auto !important;
						border-radius: 0 !important;
						margin-right: 10px !important;
					}
				`
			}} />
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="aximo-form-field">
					<Field error={errors.name}>
						<input
							{...register("name", { required: "Nome é obrigatório." })}
							type="text"
							name="name"
							id="name"
							placeholder="Seu Nome"
						/>
					</Field>
				</div>
				<div className="aximo-form-field">
					<Field error={errors.email}>
						<input
							{...register("email", { required: "E-mail é obrigatório." })}
							type="email"
							name="email"
							id="email"
							placeholder="Seu endereço de e-mail"
						/>
					</Field>
				</div>
				<div className="aximo-form-field">
					<input {...register("phone")} type="text" placeholder="+55 (11) 99999-9999" />
				</div>
				<div className="aximo-form-field">
					<textarea
						{...register("textarea")}
						name="textarea"
						placeholder="Escreva sua mensagem aqui..."
					></textarea>
				</div>
				{submitStatus && (
					<div
						style={{
							padding: "10px",
							marginBottom: "15px",
							borderRadius: "4px",
							backgroundColor: submitStatus.type === "success" ? "#4caf50" : "#f44336",
							color: "#fff",
							textAlign: "center",
							fontSize: "14px",
						}}
					>
						{submitStatus.message}
					</div>
				)}
				<button id="aximo-submit-btn" type="submit" disabled={isSubmitting} style={{ color: "#000" }}>
					<span style={{ flex: "1", textAlign: "left" }}>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</span>
					<span className="aximo-submit-icon">
						<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</span>
				</button>
			</form>
		</>
	);
}

export default MessageForm;
