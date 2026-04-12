import express from "express";
const app=express();
app.use(express.json());
//Create a Database

const FoodMenu = [
    { id: 1, FoodName: "Chowmin", category: "Veg", price: 250 },
    { id: 2, FoodName: "Paneer Butter Masala", category: "Veg", price: 320 },
    { id: 3, FoodName: "Chicken Biryani", category: "Non-Veg", price: 400 },
    { id: 4, FoodName: "Masala Dosa", category: "Veg", price: 180 },
    { id: 5, FoodName: "Egg Roll", category: "Non-Veg", price: 120 },
    { id: 6, FoodName: "Veg Fried Rice", category: "Veg", price: 220 },
    { id: 7, FoodName: "Chicken Fried Rice", category: "Non-Veg", price: 280 },
    { id: 8, FoodName: "Pav Bhaji", category: "Veg", price: 150 },
    { id: 9, FoodName: "Mutton Curry", category: "Non-Veg", price: 450 },
    { id: 10, FoodName: "Paneer Tikka", category: "Veg", price: 300 },
    { id: 11, FoodName: "Fish Fry", category: "Non-Veg", price: 350 },
    { id: 12, FoodName: "Veg Burger", category: "Veg", price: 130 },
    { id: 13, FoodName: "Chicken Burger", category: "Non-Veg", price: 180 },
    { id: 14, FoodName: "Idli Sambhar", category: "Veg", price: 100 },
    { id: 15, FoodName: "Butter Chicken", category: "Non-Veg", price: 420 }
];
//Addto cart by user 
const AddtoCart=[];


app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
});

app.post("/admin",(req,res)=>{
    //Check authentication and authorization of user to use this function
    //Dummy code writing here for now just for this real Authen and autho is complex

    const token="ABCDEF";
    const Access="ABCDEF";
    if(Access===token){
        FoodMenu.push(req.body);
        res.status(200).send("Data Added");
    }
    else res.status(202).send("Permission Not Granted To Edit...");
});

app.post("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const fooditem= FoodMenu.find(data=>data.id===id);
    if(fooditem){
        AddtoCart.push(fooditem);
        res.status(200).send("Item Added To cart");
    }
    else res.status(404).send("Item Not Found");
})


app.delete("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const newind=AddtoCart.findIndex(item=>item.id===id);
    if(newind!=-1){
        AddtoCart.splice(newind,1);
        res.status(200).send("Data Deleted successFully");
    }
    else{
        res.status(404).send("Data Not Found");
    }
    
})

app.get("/user",(req,res)=>{
    if(AddtoCart.length==0)res.send("Not Item Found");
    else res.send(AddtoCart);
})

app.listen(4000,()=>{
    console.log("App is lestining on port 4000");
})