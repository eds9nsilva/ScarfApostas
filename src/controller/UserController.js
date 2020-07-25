const User = require('../models/User');
module.exports = {
    async Store(req, res){
        try {
            const {name, email, password} = req.body;
            seach = await User.findOne({ where: { email: email } });
            if(seach != null){
                return res.json({Message: "Email já cadastrado"})
            }
            await User.create({name,email,password}).then(function(result){
                return res.status(200).json(result);
            })
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }
}