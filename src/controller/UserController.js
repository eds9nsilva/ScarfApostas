const User = require('../models/User');

const hbs = require('nodemailer-express-handlebars');
const SendEmail = require('../utils/sendEmail');
const senhaRandom = require('../utils/randomNumber');
module.exports = {

    async Store(req, res) {
        try {
            const { nome, email,telefone,nascimento, estado, cidade, senha } = req.body;
            console.log(req.body.nascimento)
            seach = await User.findOne({ where: { email: email } });
            if (seach != null) {
                return res.json({ Message: "Email já cadastrado" })
            } else {
                var tipo = 0
                await User.create({ nome, email, senha, nascimento,  telefone, estado, cidade,tipo }).then(function (result) {
                    return res.status(200).json(result);
                })
                //SendEmail.sendRegister(email);
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
    },

    async reSenha(req, res){
        try {
            const {email} = req.body;
            user = await User.findOne({ where: { email: email } });
            if(user == null){
                return res.status(404).json({ Message: "Email não cadastrado" })
            }else{
                var novaSenha = senhaRandom.code();
                await User.update(
                    {senha: novaSenha},
                    {where: {email: email}}
                    ).then(function(result){
                        return res.status(200).json({
                            message: 'Nova senha foi enviado para o email'
                        })
                    })
                SendEmail.recSenha(email,novaSenha);
            }
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

}