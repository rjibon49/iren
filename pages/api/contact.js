// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "../../config/nodeMailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
       try {
        await transporter.sendMail({
            ...mailOptions,
            subject: data.subject,
            text: "this is test email",
            html: "<h1>test title</h1><p>some body text</>"
        });
        res.status(200).json({ success: true });
       } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message })
       }
    }
    console.log(req.body);
    res.status(400).json({ message: 'Bad request' })
  }

  export default handler;
  