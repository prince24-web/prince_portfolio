// app/api/contact/route.js
import nodemailer from "nodemailer";

function escapeHtml(unsafe = "") {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req) {
  // Read JSON body
  const body = await req.json();
  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }

  if (message.length > 3000) {
    return new Response(JSON.stringify({ error: "Message too long" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const subject = `Portfolio Contact from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `
    <div>
      <h2>New message</h2>
      <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
      <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
      <div>${escapeHtml(String(message)).replaceAll("\n", "<br/>")}</div>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
