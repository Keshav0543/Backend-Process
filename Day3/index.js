const http=require('http');

const server=http.createServer((req,res)=>{

    if(req.url==="/")res.end("Hello Coder Army...");
    else if(req.url==="/contact")res.end("Hello this is an contact page");
    else if(req.url==="/about")res.end("Hello this is an abou page");
    else res.end("404 Not Found!!!");
});

server.listen(8080,()=>{
    console.log("I am listenning at port no: 8080");
});