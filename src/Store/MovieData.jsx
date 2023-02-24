import { createSlice } from "@reduxjs/toolkit";


export const hindiMovieSlice = createSlice({
    name:"Hindimovies",
    initialState:{
        hindiMovies:[
        {id:10,movieName:"Hichki",img:require('../Assets/images/bollywood/bollywood-hichki.jpg')},
        {id:11,movieName:"kabir Singh",img:require('../Assets/images/bollywood/bollywood-kabir-singh.webp')},
        {id:12,movieName:"Mera Namm Joker",img:require('../Assets/images/bollywood/bollywood-mera-naam-joker.jpg')},
        {id:13,movieName:"Rockstar",img:require('../Assets/images/bollywood/bollywood-rockstar.jpg')},
        {id:14,movieName:"Anek",img:require('../Assets/images/bollywood/anek.jpg')},
        {id:15,movieName:"Ek Villain Returns",img:require('../Assets/images/bollywood/ek villain returns.jpg')},
        {id:16,movieName:"Phone Bhoot",img:require('../Assets/images/bollywood/phone bhoot.jpg')},
        {id:17,movieName:"Om",img:require('../Assets/images/bollywood/wp10941817.jpg')},
        {id:18,movieName:"Drishyam",img:require('../Assets/images/bollywood/drishyam.jpg')},
    ]},
    reducers:{
        hindiData(state,action){
            state.hindiMovies = action.payload
        }
    }
})

export const tamilMovieSlice = createSlice({
    name:"TamilMovies",
    initialState:{tamilMovies:[
        {id:1,movieName:"Pushpa",img:require('../Assets/images/tamil/pushpa.jpg')},
        {id:2,movieName:"Master",img:require('../Assets/images/tamil/Master.jpg')},
        {id:3,movieName:"Na Peru Surya",img:require('../Assets/images/tamil/surya.jpg')},
        {id:4,movieName:"RRR",img:require('../Assets/images/tamil/RRR.jpg')},
        {id:5,movieName:"Kantara",img:require('../Assets/images/tamil/kantara.jpg')},
        {id:6,movieName:"Vikram",img:require('../Assets/images/tamil/kamal-haasan-vikram.jpg.crdownload')},
        {id:7,movieName:"Mari 2",img:require('../Assets/images/tamil/maari-2-tamil.jpg')},
        {id:8,movieName:"Karnan",img:require('../Assets/images/tamil/karnan.jpg')},
        {id:9,movieName:"Salliyarkal",img:require('../Assets/images/tamil/salliyarkal.cms')},
    ]},
    reducers:{
        tamilData(state,action){
            state.tamilMovies = action.payload
        }
    }
})

export const englishMovieSlice = createSlice({
    name:"englishMovies",
    initialState:{englishMovies:[
        {id:19,movieName:"Titanic",img:require('../Assets/images/hollywood/titanic.jpg')},
        {id:20,movieName:"Joker",img:require('../Assets/images/hollywood/joker.jpg')},
        {id:21,movieName:"Revenant",img:require('../Assets/images/hollywood/revenant.jpg')},
        {id:22,movieName:"Adam",img:require('../Assets/images/hollywood/adam.jpg')},
        {id:23,movieName:"Matrix",img:require('../Assets/images/hollywood/matrix.jpg')},
        {id:24,movieName:"Prey",img:require('../Assets/images/hollywood/Prey-poster.jpg')},
        {id:25,movieName:"The Gray Man",img:require('../Assets/images/hollywood/the gray man.jpg')},
        {id:26,movieName:"The Lost City",img:require('../Assets/images/hollywood/the lost city.jpg')},
        {id:27,movieName:"The Accursed",img:require('../Assets/images/hollywood/TheAccursed_LR.jpg')},
        {id:28,movieName:"The Devil",img:require('../Assets/images/hollywood/the-devil-conspiracy-1-400x600.jpg')},
        {id:29,movieName:"Venom",img:require('../Assets/images/hollywood/venom.jpg')},
        {id:30,movieName:"WarCraft",img:require('../Assets/images/hollywood/Warcraft.jpg')},
        
    ]},
    reducers:{
        englishData(state,action){
            state.englishMovies = action.payload
        }
    }
});