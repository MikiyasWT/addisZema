let Song = require("../models/song.model");
const catchAsyncErrors = require("../utils/catchAsyncErrors");

//list all songs in our database
const getSongs = catchAsyncErrors(async (req, res) => {
  await Song.find()
    .then((songs) => res.send(songs))
    .catch((err) =>
      res
        .status(400)
        .send({ success: "false", message: "failed to load songs", Error: err })
    );
});

//return a particular song specified by it id in url
const getSong = catchAsyncErrors(async (req, res) => {
  await Song.findById(req.params.id)
    .then((song) => res.status(200).send(song))
    .catch((err) =>
      res
        .status(400)
        .send({ success: "false", message: "song not found", Error: err })
    );
});

//add a new song to our database
const addSong = catchAsyncErrors(async (req, res) => {
  //const {title, artist, album, genre} = req.body
  const body = req.body;

  const newSong = new Song(body);

  await newSong
    .save()
    .then(() =>
      res.status(201).send({ success: "true", message: "New Song Added" })
    )
    .catch((err) =>
      res
        .status(422)
        .send({ success: "false", message: "failed to add song", Error: err })
    );

  //422 unprocessabile entity
});

//update already exisiting song details specified by id
const editSong = catchAsyncErrors(async (req, res) => {
  //const {name,dob,gender,salary} = req.body;

  const isSong = await Song.findById(req.params.id).exec();

  if (!isSong) return res.status(400).json("song not found");

  let query = { $set: {} };
  for (let key in req.body) {
    if (isSong[key] && isSong[key] !== req.body[key])
      // if the field we have in req.body exists, we're gonna update it
      query.$set[key] = req.body[key];
  }

  const updatedSong = await Song.updateOne({ _id: req.params.id }, query);
  if (!updatedSong.acknowledged) {
    res.send({ success: false }).status(400);
  }

  res.send({ success: true, updatedSong }).status(200);
});

// remove a song specified by unique id
const removeSong = catchAsyncErrors(async (req, res) => {
  await Song.findByIdAndDelete(req.params.id)
    .then(() =>
      res.send({ success: "true", message: "Song removed " }).status(204)
    )
    .catch((err) =>
      res
        .status(400)
        .json({ success: "false", message: "Song not removed", Error: err })
    );
});

module.exports = { getSongs, getSong, addSong, editSong, removeSong };
