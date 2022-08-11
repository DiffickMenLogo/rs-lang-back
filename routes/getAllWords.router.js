const router = require('express').Router();
const Words = require('../models/Words.model'); 

router.get('/words', async (req, res) => {
    try{
        const page = req.query.page || 0;
        const group = req.query.group || 0;
        if (isNaN(page) || isNaN(group)) {
            res.status(400).json({
                message: 'Bad request. Page and group must be numbers.'
            });
        }
            const words = await Words.find({group, page});
            res.status(200).json(words);
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
});

module.exports = router;