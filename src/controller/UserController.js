const User = require('../models/User');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

module.exports = {

    async Store(req, res) {
        try {
            const { name, email, password } = req.body;
            seach = await User.findOne({ where: { email: email } });
            if (seach != null) {
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
                
                const emailOptions = {
                    from: 'eds9ndasilva@gmail.com',
                    to: email,
                    subject: 'Seja Bem-vindo',
                    text: 'Scarf Apostas'
                    //template: 'index'
                }
               /* transporter.sendMail(emailOptions, function(err){
                    console.log(err)
                }) */
            }
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },

    async SeachUser(req, res){
        try {
            const {email, password} = req.body;
            user = await User.findOne({ where: { email: email } });
            if(user == null){
                return res.status(404).json({ Message: "Senha ou email está incorreto" })
            }else{
                if(password == user.password){
                    return res.status(200).json(user);
                }else{
                    return res.status(404).json({ Message: "Senha ou email está incorreto" })
                }
            }
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }
}