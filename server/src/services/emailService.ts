import nodemailer, { Transporter } from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail({ to, subject, text }: EmailOptions): Promise<void> {
  const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "loy.zboncak@ethereal.email",
      pass: "WhRqNGRTqfw2DgVeTz",
    },
  });

  // Формируем письмо
  const mailOptions = {
    from: '"Your App" <no-reply@example.com>',
    to,
    subject,
    text,
  };

  try {
    // Отправляем письмо
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId); // Идентификатор сообщения
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); // Ссылка на просмотр письма
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
}