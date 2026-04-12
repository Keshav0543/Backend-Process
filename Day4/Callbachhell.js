//Practice of call back hell

function placeOrder(preparingOrder){
   return new Promise((resolve)=>{
     console.log("Payment is in processing...");

    setTimeout(()=>{
        console.log("Payment is done successfully... Order Placed");
        resolve();
    },3000)
   })
}

function preparingOrder(Deleivery){
   return new Promise((resolve)=>{
    console.log("Food Preparation Started...");

    setTimeout(()=>{
        console.log("Food Preparation Done...");
        resolve();
    },3000)
   })
}

function Deleivery(OrderDelivered){
    return new Promise((resolve)=>{
    console.log("Deleivery Boy is on the way to pickup the order...");

    setTimeout(()=>{
        console.log("Food is picked by deleivery boy....");
        resolve();
    },3000)
    })
}

function OrderDelivered(){
    console.log("Delivery Boy is on the way to deliver the product...");

    setTimeout(()=>{
        console.log("Food is Delivered successfully...");

    },5000);
}

// placeOrder(()=>{
//     preparingOrder(()=>{
//         Deleivery(OrderDelivered)
//     })
// });

//Now here we see the chaining of Function call it is non -readable to make readable we use promise/ or an
// await keyword

async function Runorder(){
await placeOrder();
await preparingOrder();
await Deleivery();
await OrderDelivered();
}

Runorder();