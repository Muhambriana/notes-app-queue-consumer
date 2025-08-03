import nodemailer from 'nodemailer';

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMPTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMPTP_USER,
        pass: process.env.SMPTP_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Notes Apps',
      to: targetEmail,
      subject: 'Ekspor Catatan',
      text: 'Terlampir hasil dari ekspor catatan',
      attachments: [
        {
          filename: 'notes.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

export default MailSender;

