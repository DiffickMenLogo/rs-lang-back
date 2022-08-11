const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    JWT_SECRET_KEY_REFRESH: process.env.JWT_SECRET_KEY_REFRESH,
    MAILER_USER: process.env.MAILER_USER,
	MAILER_PASS: process.env.MAILER_PASS,
	FEEDBACK_USER: process.env.FEEDBACK_USER,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};