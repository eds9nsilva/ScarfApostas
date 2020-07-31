const User = require('../models/User');
const hbs = require('nodemailer-express-handlebars');
const SendEmail = require('../utils/sendEmail');
module.exports = {

    async Store(req, res) {
        try {
            const { nome, email, senha, telefone } = req.body;
            seach = await User.findOne({ where: { email: email } });
            if (seach != null) {
                return res.json({ Message: "Email já cadastrado" })
            } else {
                var tipo = 0
                await User.create({ nome, email, senha, tipo, telefone }).then(function (result) {
                    return res.status(200).json(result);
                })
                SendEmail.sendRegister(email);
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