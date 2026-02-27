import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  // Allow POST only
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, org, message, company } = req.body;

    // 🛑 Honeypot spam protection
    if (company) {
      return res.status(400).json({ error: "Spam detected" });
    }

    // ✅ Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // =========================
    // 1️⃣ Send notification to you
    // =========================
    const notify = await resend.emails.send({
      from: "Nsembe Website <info@nsembe.online>",
      to: ["info@nsembe.online"],
      reply_to: email,
      subject: `[Website Lead] ${name} - ${org || "Individual"}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${org || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // =========================
    // 2️⃣ Send auto-reply to sender
    // =========================
    await resend.emails.send({
      from: "Nsembe Technologies <info@nsembe.online>",
      to: [email],
      subject: "We've received your message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Thank you for reaching out</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and our team will respond within 1–2 business days.</p>
          <p><strong>Your Message:</strong></p>
          <p>${message}</p>
          <br/>
          <p>— Nsembe Technologies</p>
          <p>info@nsembe.online</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      id: notify.id,
    });

  } catch (error) {
    console.error("Resend Error:", error);

    return res.status(500).json({
      success: false,
      error: "Email failed to send",
    });
  }
}