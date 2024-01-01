// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter, mailOptions } from "../../config/nodeMailer";
import multer from 'multer';

const CONTACT_MESSAGE_FIELDS = {
    name: "name",
    email: "email",
    number: "number",
    subject: "subject",
    budget: "budget",
    message: "message",
};

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${val} \n \n`),
        ""
    );

    const htmlData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `<p className="mailTextTitle" align="left">${CONTACT_MESSAGE_FIELDS[key]}: <span style="color:red; font-size:16px;"> ${val} </span></p>`),
        ""
    );

    return {
        text: stringData,
        html: htmlData,
    };
};

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            // Use upload middleware to handle file uploads
            upload.array('attachment')(req, res, async function (err) {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }

                const data = req.body;

                // If you have a file input in your form, you can access the file information from req.files
                const attachments = (req.files || []).map(file => ({
                    filename: file.originalname,
                    content: file.buffer,
                }));

                await transporter.sendMail({
                    ...mailOptions,
                    ...generateEmailContent(data),
                    subject: data.subject,
                    attachments,
                });

                return res.status(200).json({ success: true });
            });
        } else {
            return res.status(400).json({ message: 'Bad request' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const config = {
    api: {
        bodyParser: false, // Disabling bodyParser to handle it manually with multer
    },
};

export default handler;