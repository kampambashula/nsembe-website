import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, org, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const response = await resend.emails.send({
      from: "Nsembe Website <info@nsembe.online>", // MUST be verified in Resend
      to: ["info@nsembe.online"],
      reply_to: email,
      subject: `New Contact Form Message from ${name}`,
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

    return res.status(200).json({
      success: true,
      id: response.id,
    });

  } catch (error) {
    console.error("Resend Error:", error);

    return res.status(500).json({
      success: false,
      error: "Email failed to send",
    });
  }
}