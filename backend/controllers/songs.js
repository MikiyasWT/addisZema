

let Song = require('../models/song.model');


 
//list all songs in our database
const getSongs = async (req,res) => {
    await Song.find()
         .then(songs => res.json(songs))
         .catch(err => res.status(400).json({'success':'false','message':'failed to load songs','Error':err}))

}


//return a particular song specified by it id in url
 const getSong = async (req,res) => {
    
     await Song.findById(req.params.id)
      .then(song => res.status(200).json(song))
      .catch(err => res.status(400).json({'success':'false','message':'song not found','Error':err}))
}

 

//add a new song to our database
const addSong = async (req,res) => {
    


   
    //const {title, artist, album, genre} = req.body
    const body = req.body

    const newSong = new Song(body);
    
    await newSong.save()
      .then(() => res.status(201).json({'success':'true','message':'New Song Added'}))
      .catch(err => res.status(422).json({'success':'false','message':'failed to add song','Error':err}));

      //422 unprocessabile entity
}


//update already exisiting song details specified by id 
const editSong = async (req,res) => {
    //const {name,dob,gender,salary} = req.body;
    
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



// remove a song specified by unique id
 const removeSong = async (req,res) => {
   

    await Song.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json({'success':'true','message':'Song removed '}))
        .catch(err => res.status(400).json({'success':'false','message':'Song not removed','Error': err}))
}





module.exports = { getSongs,getSong, addSong,editSong, removeSong };
