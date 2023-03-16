const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type:String,
        minlength:3
    },
    artist: {
        type:String,
        minlength:3
    },
    album: {
        type:String,
        minlength:3
    },
    genre: {
        type:String,
        minlength:3
    }
}, 
    {
        timestamps:true
    });


 const Song = mongoose.model('Song',songSchema);
 
 module.exports = Song;












