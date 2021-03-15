import Post from "./post";
const post = new Post("Filin");

setTimeout(()=>{
    console.log(new Post("Filin").toString());
},2000)

console.log(post.toString());
