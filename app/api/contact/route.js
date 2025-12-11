export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, phone, message, toEmail } = body;

		if (!name || !email) {
			return Response.json({ error: "Nome e e-mail são obrigatórios" }, { status: 400 });
		}

		const recipientEmail = toEmail || "birasro@gmail.com";

		// Preparar dados do email
		const emailData = {
			to: recipientEmail,
			subject: `Contato do site - ${name}`,
			html: `
				<h2>Nova mensagem do formulário de contato</h2>
				<p><strong>Nome:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
				<p><strong>Mensagem:</strong></p>
				<p>${message || "Sem mensagem"}</p>
			`,
			text: `
				Nome: ${name}
				Email: ${email}
				Telefone: ${phone || "Não informado"}
				
				Mensagem:
				${message || "Sem mensagem"}
			`,
		};

		// Log para desenvolvimento (em produção, você deve usar um serviço de email real)
		console.log("Email que seria enviado:", emailData);

		// NOTA: Para funcionar realmente, você precisa:
		// 1. Instalar um serviço de email (ex: npm install resend)
		// 2. Configurar variáveis de ambiente
		// 3. Descomentar e configurar o código abaixo

		/*
		// Exemplo com Resend:
		const { Resend } = require('resend');
		const resend = new Resend(process.env.RESEND_API_KEY);
		
		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: recipientEmail,
			subject: emailData.subject,
			html: emailData.html,
		});

		if (error) {
			return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
		}
		*/

		// Por enquanto, retorna sucesso para testes
		// Em produção, você deve implementar o envio real de email acima
		return Response.json({
			success: true,
			message: "Mensagem processada com sucesso",
			// Em desenvolvimento, os dados estão sendo logados no console
		});
	} catch (error) {
		console.error("Error processing contact form:", error);
		return Response.json({ error: "Erro interno do servidor" }, { status: 500 });
	}
}

