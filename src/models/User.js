const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            tipo: DataTypes.INTEGER,
            telefone: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Aposta, { foreignKey: 'id_user', as: 'users' });    
    }
}

module.exports = User;