const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            tipo: DataTypes.INTEGER,
            telefone: DataTypes.STRING,
            nascimento: DataTypes.STRING,
            estado: DataTypes.STRING,
            cidade: DataTypes.STRING
        }, {
            sequelize
        })
    }

    
}

module.exports = User;