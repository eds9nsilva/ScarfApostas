const {Model, DataTypes} = require('sequelize');

class Aposta extends Model{
    static init(sequelize){
        super.init({
            status: DataTypes.STRING,
            codigo: DataTypes.INTEGER,
            id_cambista: DataTypes.INTEGER,
            id_user: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    
    static associate(models){
        this.hasMany(models.User, { foreignKey: 'id', as: 'users' });    
    }
}


module.exports = Aposta;