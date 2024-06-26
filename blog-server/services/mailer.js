import nodemailer from 'nodemailer';

import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "reya25pandey@gmail.com",
    pass: "qxprtlxmrvvegptm",
  },
});

const sendNodeMailerMail = async ({
  recipient,
  sender,
  subject,
  html,
  text,
  attachments,
}) => {
  try {
    const from = sender || "reya25pandey@gmail.com";

    const mailOptions = {
      from: from,
      to: recipient,
      subject,
      html: html,
      text: text,
      attachments,
    };

    return await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("mail err", err);
  }
};

const sendEmail = async (args) => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendNodeMailerMail(args);
  }
};

export default {
    sendEmail,
};
