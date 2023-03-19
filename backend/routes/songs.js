const express = require('express');
const { getSongs,getSong, addSong,editSong, removeSong  } = require('../controllers/songs');
const router = express.Router();
const {songValidation} = require('../validation/songsValidation');

//i will add validation token here

router.get('/',getSongs)

router.get('/:id', getSong)

router.post('/',addSong,songValidation)

router.patch('/:id', editSong)

router.delete('/:id', removeSong)

module.exports = router;