const {Schema, model} = require("mongoose");

const WordsShema = new Schema(
    {
        page: {type: Number, required: true},
        word: {type: String, required: true},
        group: {type: Number, required: true},
        transcription: {type: String, required: true},
        translateWord: {type: String, required: true},
        imageExample: {type: String, required: true},
        audio: {type: String, required: true},
        audioExample: {type: String, required: true},
        audioMeaning: {type: String, required: true},
        textMeaning: {type: String, required: true},
        textExample: {type: String, required: true},
        textExampleTranslate: {type: String, required: true},
        textMeaningTranslate: {type: String, required: true},
    }, 
    {
        collection: "allWords"
    }
);

module.exports = model("allWords", WordsShema);