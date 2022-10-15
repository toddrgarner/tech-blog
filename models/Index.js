// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User Relationship
User.hasMany(Post,{
    foreignKey: 'user_id'
});

User.hasMany(Comment,{
    foreignKey: 'user_id'
});

// Post Relationships
Post.belongsTo(User,{
    foreignKey: "user_id"
});

Post.belongsTo(Comment,{
    foreignKey: "post_id"
});


// Comment Relationships
Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Post, Comment };