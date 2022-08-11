const router = require('express').Router();
const Words = require('../models/Words.model'); 

router.get('/allWords', async (req, res) => {
    try{
        const page = Number(req.query.page) || 0;
        const group = Number(req.query.group) || 0;
        
        const words = await Words.find({group, page});
        res.status(200).json(words);

        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
});

module.exports = router;