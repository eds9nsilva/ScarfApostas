const Aposta = require('../models/Aposta');
const Code = require('../utils/randomNumber');
module.exports = {
    async Store(req, res) {
        try {
            const { id_user } = req.headers;
            status = 'Aguardando confirmação de pagamento';
            let codigo = await Code.code();
            do {
                re = await Aposta.findOne({ where: { codigo: codigo } })
                if (re != null) {
                    let codigo = await Code.code();
                }
            } while (re != null)
            var id_cambista = 0
            
            console.log(codigo)
            console.log(id_user);
            await Aposta.create({status,codigo , id_cambista, id_user}).then(function (result) {
                return res.status(200).json(result);
            })
            console.log(codigo)
            console.log(id_user);
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }
}