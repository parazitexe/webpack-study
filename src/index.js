import Post from "./post";
const post = new Post("Filin");

import "./styles/styles.scss"
import json from "./assets/json.json"

setTimeout(()=>{
    console.log(new Post("Filin").toString());
},2000)

console.log(post.toString());

console.log(json);
