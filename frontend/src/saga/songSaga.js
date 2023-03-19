import axios from "axios";
//import {getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee} from "../apis/index"
import { call, put, takeEvery,StrictEffect, takeLatest } from 'redux-saga/effects';
//const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiUrl = 'http://localhost:5000/songs'

const server = axios.create({
    baseURL: "http://localhost:5000/songs" 
  });


async function getListOfSongs() {
    //return await fetch(apiUrl).then(response => response.json().catch(error => error));
    return await server.get().then(response => response.data).catch(error => error)
}

function* fetchSongs(action) {
    try {
     const songs = yield call(getListOfSongs);
     yield put({ type: 'GET_SONGS_SUCCESS', songs: songs });
    } catch (error) {
     yield put({ type: 'GET_SONGS_FAILED', message: error.message });
    }
   }


async function addNewSongApi(song){

    return await server.post('', {
        title:song.title,
        artist:song.artist,
        album:song.album,
        genre:song.genre
    }).then(response => response.data).catch(error => error)
}


function* addNewSong(action){
    const song = action.payload
    
    try {
        const addedSong = yield call(addNewSongApi(song));
        
        yield put({ type: 'ADD_NEW_SONG_SUCCESS', song: addedSong });
        //yield put({ type: 'GET_EMPLOYEES_SUCCESS', employees: employees });
       
    } catch (error) {
        yield put({ type: 'ADD_NEW_SONG_FAILED', message: error.message });
    }
}

async function deleteSongByIdApi(song){
    
    return await fetch(apiUrl+`/${song._id}`, {method: "DELETE",
     headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, 
     }).then(response => response.json().catch(error => error));
}


function* deleteSong(action){
    const songToBeDeleted = action.payload;
    
    try {
        const songDeleted = yield call(deleteSongByIdApi(songToBeDeleted));
        yield put({ type: 'DELETE_SONG_BY_ID_SUCCESS', song: songDeleted });
    } catch (error) {
        yield put({ type: 'DELETE_SONG_BY_ID_FAILED', message: error.message });
    }
}




async function updateSongApi(song){
   
    return await fetch(apiUrl+`/${song._id}`, {method: "PATCH",body: JSON.stringify({
        title:song.title,
        artist:song.artist,
        album:song.album,
        genre:song.genre}),
     headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, 
     }).then(response => response.json().catch(error => error));
}

function* updateSong(action){
    const songToBeUppdated = action.payload;
    
    try {
        const songUpdated = yield call(updateSongApi(songToBeUppdated));
        yield put({ type: 'UPPDATE_SONG_BY_ID_SUCCESS', song:songUpdated });
    } catch (error) {
        yield put({ type: 'UPPDATE_SONG_BY_ID_FAILED', message: error.message });
    }
}



function* songSaga() {
 yield takeEvery('GET_SONGS_REQUESTED', fetchSongs);
 yield takeEvery('ADD_NEW_SONG_REQUESTED', addNewSong); 
 yield takeEvery('UPPDATE_SONG_BY_ID_REQUESTED',updateSong) ;
 yield takeEvery('DELETE_SONG_BY_ID_REQUESTED',deleteSong)
}

export default songSaga;