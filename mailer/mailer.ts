import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

const mailerPass = process.env.PASSDEMAILER


const transporter  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'felixjgca@gmail.com',
        pass: mailerPass
    },
    from: 'felixjgca@gmail.com'
});

export const sendEmail = async (to: string, code: string): Promise<void> => {

    const mailOptions = {
        from: '"CreacionTextil" felixjgca@gmail.com',
        to,
        subject: 'Código de verificación para CreacionTextil',
        text: `
            Llegó tu codigo para CreacionTextil.
            El código es ${code}
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correo electrónico enviado");   
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error)
    }

}