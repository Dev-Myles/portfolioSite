
import nodemailer from 'nodemailer';

export async function sendEmail(email, name, company, message) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });
          transporter.sendMail({
            from: "",
            to: process.env.NODE_MAILER_RECIPIENT,
            subject: "Message from portfolio site",
            text: `
            from: ${email} \n
            name: ${name} \n
            company: ${company} \n
            ${message}
            `,
          });
  } catch (error) {
  
    req.flash('error', 'Error occured while creating message.');
  }
};
