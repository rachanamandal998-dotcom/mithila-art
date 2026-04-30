require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  console.log("📩 Incoming data:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📤 Sending email...");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rachanamandal998@gmail.com",
      subject: `New Festival Registration - ${req.body.full_name}`,
      text: `
Full Name: ${req.body.full_name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Attendees: ${req.body.attendees}
Type: ${req.body.participation_type}
Message: ${req.body.message}
Submitted At: ${req.body.submitted_at}
      `,
    });

    console.log("✅ Email sent successfully");

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("❌ FULL ERROR:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});
