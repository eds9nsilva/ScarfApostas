const nodemailer = require('nodemailer');

module.exports = {
    async sendRegister(email){
        const transporter = await nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "eds9ndasilva@gmail.com",
                pass: "phpsantosfc007"
            }
        });
        
        const emailOptions = {
            from: 'eds9ndasilva@gmail.com',
            to: email,
            subject: 'Seja Bem-vindo',
            text: 'Scarf Apostas **Tá funcionando** '
            //template: 'index'
        }
        console.log(email)
        transporter.sendMail(emailOptions)
    }
}
