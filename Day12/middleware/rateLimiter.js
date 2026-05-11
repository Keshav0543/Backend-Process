import client from "../config/redis.js";

const Totalttl =600; const maxRequest=60;

async function rateLimiter(req,res,next){
    try{
        const key=`IP${req.ip}`;

        const currenttime=Date.now()/1000;
        const window_time=currenttime-Totalttl;

        await client.zRemRangeByScore(key,0,window_time);

        const numberOfreq= await client.zCard(key);



        if(numberOfreq>maxRequest) throw new Error("Cool down try agaiin after sometime!!!");

        await client.zAdd(key,[{score:currenttime,value:`${currenttime}:${Math.random()}`}]);
        
        //key ke TTl ko increase karna 
        await client.expire(key,Totalttl);

        const ttl = await client.ttl(key);
        console.log(ttl);
        next();

    }
    catch(err){
        res.send(err.message);
    }
}

export default rateLimiter;