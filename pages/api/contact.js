// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "../../config/nodeMailer";

const CONTACT_MESSAGE_FIELDS = {
    name: "name",
    email: "email",
    number: "number",
    subject: "subject",
    budget: "budget",
    message: "message",
}

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key]} : \n${val}} \n \n`),
             "");
 
        const htmlData = Object.entries(data).reduce(
            (str, [key, val]) =>
              (str += `<h1 className="mailTextTitle" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p className="mailTextBody" align="left">${val}</p>`),
            "" );
    return {
        text: stringData,
        html: htmlData
    }
}

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: data.subject,
            });
            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
    console.log(req.body);
    return res.status(400).json({ message: 'Bad request' });
}

export default handler;