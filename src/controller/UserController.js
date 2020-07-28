const User = require('../models/User');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

module.exports = {
    async Store(req, res) {
        try {
            const { name, email, password } = req.body;
            seach = await User.findOne({ where: { email: email } });
            if (seach == null) {
                return res.json({ Message: "Email já cadastrado" })
            } else {
                await User.create({ name, email, password }).then(function (result) {
                    return res.status(200).json(result);
                })
                const transporter = await nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: "eds9ndasilva@gmail.com",
                        pass: "phpsantosfc007"
                    }
                });
                transporter.use('compile', hbs({
                    viewEngine: 'express-handlebars',
                    viewPath: '/src/controller/'
                }));
                
                const emailOptions = {
                    from: 'eds9ndasilva@gmail.com',
                    to: email,
                    subject: 'Seja Bem-vindo',
                    template: 'index'
                }
                transporter.sendMail(emailOptions, function(err){
                    console.log(err)
                })
            }
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }
}