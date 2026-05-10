import client from "../config/redis.js";

async function rateLimiter(req,res,next){
    try{
        const ip=req.ip;
        
        const count=await client.incr(ip);
        if(count>60)throw new Error("Cool down try again after sometime!!!");

        if(count==1) await client.expire(ip,3600);

        next();
    }
    catch(err){
        res.send(err.message);
    }
}

export default rateLimiter;