const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const auth = require('./routes/auth.router');
const words = require('./routes/getAllWords.router');
const userWords = require('./routes/userWords.router');
const statistics = require('./routes/statistics.router');
const settings = require('./routes/settings.router');
const changeName = require('./routes/changeName.router');
const feedback = require('./routes/feedback.router');
const uploadImage = require('./routes/upload.router');
const { PORT, DB_URL } = require('./config');

const app = express();
app.use(express.json({ extended: true }));
app.use(
    fileUpload({
        useTempFiles: true
    })
);
app.use(cors());
app.use('/files', express.static(path.join(__dirname, './files')));

app.use(auth);
app.use(words);
app.use(userWords);
app.use(changeName);
app.use(statistics);
app.use(settings);
app.use(feedback);
app.use(uploadImage);



async function start() {
    try{
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

start();

