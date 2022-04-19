const { Model,DataTypes } = require('sequelize');
const sequelize = require('../db');
const Post = require('./Post');

class User extends Model {};
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Username already exists'
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize,
    modelName: 'users',
    timestamps: false
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;
