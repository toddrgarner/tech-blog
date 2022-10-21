const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) =>{
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .cath(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
});
// add withauth before (req, res)
router.post('/', (req, res) => {
    // expects => {comment_text: "T"his is the comment", user_id: 1, post_id: 2}
    console.log(req, body);
    console.log(req.session.user._id)
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
         });    
    });
// add withauth before (req, res)
router.delete('/:id',  (req, res) => {
        Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with is id!'});
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;