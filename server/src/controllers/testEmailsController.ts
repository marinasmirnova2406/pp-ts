import { Request, Response } from "express";
import { sendEmail } from "../services/emailService";

export const sendVerificationCode = async (req: Request, res: Response) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: "Email and code are required." });
  }

  try {
    await sendEmail({
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is: ${code}`,
    });

    res.status(200).json({ message: "Verification code sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};
