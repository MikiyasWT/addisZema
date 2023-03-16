

let Song = require('../models/song.model')
const {songValidation} = require('../validation/songsValidation')

 const getSongs = async (req,res) => {
    await Song.find()
         .then(songs => res.json(songs))
         .catch(err => res.status(400).json('Error:' + err))

   
}

 const getSong = async (req,res) => {
    console.log(req.params.id)
     await Song.findById(req.params.id)
      .then(song => res.json(song))
      .catch(err => res.status(400).json('Error:' + err))
}

 


const addSong = async (req,res) => {
    
const {error} = songValidation(req.body)
if(error) return res.status(422).send(error.details[0].message)

   
    //const {title, artist, album, genre} = req.body
    const body = req.body

    const newSong = new Song(body);
    console.log(body)
   //  await newSong.save()
   //    .then(() => res.json('New Song Added'))
   //    .catch(err => res.status(400).json('Error:' + err));
}



const editSong = async (req,res) => {
    const {name,dob,gender,salary} = req.body;

    const isSong = await Song.findById(req.params.id).exec()

    if(!isSong) return res.status(400).json('song not found')

    let query = {$set: {}};
    for (let key in req.body) {
    if (isSong[key] && isSong[key] !== req.body[key]) // if the field we have in req.body exists, we're gonna update it
       query.$set[key] = req.body[key];

       }

    const updatedSong = await Song.updateOne({_id: req.params.id}, query);

    res.send(updatedSong);

}


 const removeSong = async (req,res) => {
   

    await Song.findByIdAndDelete(req.params.id)
        .then(() => res.json('Song deleted'))
        .catch(err => res.status(400).json('Error:' + err))
}





module.exports = { getSongs,getSong, addSong,editSong, removeSong };
