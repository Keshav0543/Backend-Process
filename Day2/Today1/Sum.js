function Sum(a,b){
    return a+b;
}

console.log("Bhai me Sum hu...");

async function Message(){
    setInterval(()=>{
        console.log("Hello SetInterval!!!!");
    },2000);
}

Message();


export {Sum};