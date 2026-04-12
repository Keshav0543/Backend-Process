import express from "express";
const app=express();

const BookStore=[
    {id:1, BookName:"HarryPotter", Author:"Keshav jhatka",Price:3000},
    {id:2 ,BookName:"CyberSecurity", Author:"Keshav Thakur",Price:400},
    {id:3, BookName:"Manga", Author:"Naruto Uzamaki", Price:800},
    {id:4, BookName:"Dsa", Author:"Vicky jha", Price:1000},
    {id:5, BookName:"MastRam", Author:"Mast", Price:2000},
]

app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(BookStore);
})

app.get("/book/:id",(req,res)=>{
    let id=req.params.id;
    id= parseInt(id);
    res.send(BookStore.find(info=>info.id===id));
})


app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data Saved SuccessFully...");
})

app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    let ind=BookStore.findIndex(info=>info.id===id);
    if(ind!=-1){
        BookStore.splice(ind,1);
        res.send("Book Deleted SuccessFully....");
    }
    else{
        res.send("Book Not Found...");
    }
})


app.patch("/book",(req,res)=>{
    let result=BookStore.find(info=>info.id===req.body.id);
    if(req.body.Author)result.Author=req.body.Author;
    else if(req.body.BookName)result.BookName=req.body.BookName;
    res.send("Patched SuccessFully Done...");
});











app.listen(4000,()=>{
    console.log("Listening On port no: 4000");
})

