const { Comment } = require('../models');

const commentdata = [   
    {
        comment_text: 'Yes! I love ORMs as well',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Thank you for explaining the differnce between authorization.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Thank you for your explanation on MVC!',
        user_id: 3,
        user_id: 3
    }
];

const seedComments = ()  => Comment.bulkCreate(copmmentdata);

module. exports = seedComments;