const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
// You need two parameters to delete a comment because
// you need the comment id, but you also need to know which pizza that
//comment came from to update the association & delete the associated comment data
//from the pizza
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;
