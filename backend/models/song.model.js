const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type:String,
        minlength:3,
        unique:true,
        required: true
    },
    artist: {
        type:String,
        minlength:3,
        required: true,

    },
    album: {
        type:String,
        minlength:3,
        required: true
    },
    genre: {
        type:String,
        minlength:3,
        required: true
    }
}, 
    {
        timestamps:true
    });


 const Song = mongoose.model('Song',songSchema);
 
 module.exports = Song;












