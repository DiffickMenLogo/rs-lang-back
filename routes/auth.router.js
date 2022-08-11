const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { JWT_SECRET } = require('../config');
const { getUserStats } = require('../utils/getStats.js');
const mailer = require('../utils/nodemailer');
const { getMailerMessage } = require('../utils/getMassages.js');

router.post('/signup', async (req, res) => {
    try{
        const { email, password, name } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({
                message: 'User with this email already exists.'
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email, password: hashedPassword, name});
        await newUser.save();
        mailer(getMailerMessage(email, password, name));
        res.status(200).json({
            user,
            message: 'You have successfully signed up. Check your email for your password.'
        });
    } catch (e){
        console.log('signup',e);
        res.status(400).send(e);
    }
});

router.post('/signin', async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: 'User with this email does not exist.'
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({
                message: 'Invalid password.'
            });
        }
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '24h' });
        const userStats = getUserStats(user.statistics);
        res.status(200).json({
            token,
            userId: user._id,
            userName: user.name,
            userEmail: user.email,
            avatarUrl: user.avatarUrl,
            settings: user.settings,
            userWords: user.words,
            statistics: parsedStats,
            message: 'You have successfully signed in. Welcome back!'
        });
    } catch (e) {
        console.log('signin',e);
        res.status(400).send(e);
    }
});

module.exports = router;