const { Model,DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Post extends Model {};
Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    sequelize,
    modelName: 'posts',
    timestamps: false,
});

module.exports = Post;