"use server";

import { logger } from "@/lib/logger";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (_prevState: unknown, formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || !name || !SenderEmail) {
    logger.warn("email_send_validation_failed", {
      missingFields: [
        !message && "message",
        !name && "name",
        !SenderEmail && "SenderEmail",
      ].filter(Boolean),
    });
    return { error: "Please fill in all fields." };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `rahulkoju69@gmail.com`,
      subject: `${name} From Contact Form.`,
      replyTo: `${SenderEmail}`,
      text: `sender email: ${SenderEmail}\n${message}`,
    });

    logger.info("email_sent", { name, SenderEmail });
    return { success: true };
  } catch (error) {
    logger.error("email_send_failed", {
      message: error instanceof Error ? error.message : "unknown error",
    });
    return { error: "Failed to send email. Please try again." };
  }
};
