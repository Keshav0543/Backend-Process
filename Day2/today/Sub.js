function Sub(a,b){
    return a-b;
}

console.log("Hey i am minus!");

function Message(){
    setInterval(()=>{
        console.log("Hello SetInterval!!!");
    },2000);
}

Message();

module.exports=Sub;