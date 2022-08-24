const router = require('express').Router();
const mailer = require('./nodemailer');
const { getFeedbackMessage } = require('../utils/getMessage');
const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('../config');

cloudinary.config({
	cloud_name: CLOUDINARY_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET
});

router.post('/feedback', async (req, res) => {
	try {
		const { mail, message } = req.body;
		mailer(getFeedbackMessage(mail, message));
		res
			.status(200)
			.json({ message: `Огромное спасибо за обратную связь. Ответ поступит на указанную вами почту - ${mail}` });
	} catch (e) {
		console.log('feedback error', e);
		res.status(400).send(e);
	}
});

module.exports = router;
