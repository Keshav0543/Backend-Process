import bcrypt from "bcrypt"; 

const password="@@@@@@@@!k1K";

const salt= await bcrypt.genSalt(10);
const hashPass= await bcrypt.hash(password,"$2b$10$.dI8R45SrHuzmOMsrcsTZO");

// const ans= await bcrypt.compare(password,hashPass);


// console.log(salt);
// console.log(hashPass);


// $2b$10$.dI8R45SrHuzmOMsrcsTZO
// AoMNXXq0GQdsmFkjodOAeXoJF6MeCM.

const hashPass2= await bcrypt.hash(password,"$2b$10$.dI8R45SrHuzmOMsrcsTZO");
if(hashPass===hashPass2)console.log("true");
else console.log("false");

console.log(hashPass2);