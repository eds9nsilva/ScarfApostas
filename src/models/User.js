const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio"
                    }
                }
            },
            email: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: {
                        msg: "Formato de e-mail inválido"
                    }
                }
            }
        },{
            sequelize
        })
    }
}

module.exports = User;