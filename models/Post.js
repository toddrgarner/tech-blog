const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Creating Post models
class Post extends Model{

}
// Post model fields for Post
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
       },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
      }
);
module.exports = Post;