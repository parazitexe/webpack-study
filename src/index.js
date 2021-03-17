import Post from "./post";
const post = new Post("Filin");

import logo from "./assets/kkf.jpg";

import "./styles/styles.scss"
import "./styles/fonts.scss"

import json from "./assets/json.json"

setTimeout(()=>{
    console.log(new Post("Filin", logo).toString());
},2000)

console.log(post.toString());

console.log(json);
