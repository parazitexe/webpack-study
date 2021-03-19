import Post from "./post";
const post = new Post("Filin");

import logo from "./assets/kkf.jpg";

import "./styles/styles.scss"
import "./styles/fonts.scss"

import img from './assets/kkf.jpg';
import json from "./assets/json.json"
import csv from "./assets/rand.csv"


setTimeout(()=>{
    console.log(new Post("Filin", logo).toString());
},2000)

document.getElementById('img').setAttribute('src', img)

console.log(post.toString());

console.log("json - ",json);
console.log("img - ",img);
console.log("csv - ",csv);
