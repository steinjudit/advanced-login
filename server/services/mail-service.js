const nodemailer = require('nodemailer');
const UserModel = require('../models/user-model');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })

    }


    async sendActivationLink(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation user',
            text: '',
            html: `
                <div>
                    <h1>
                        For activation click link
                    </h1>
                    <a href="${link}">${link}</a>
                </div>

            `
        })
    }

    
}

module.exports = new MailService();