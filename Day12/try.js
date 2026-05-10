const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY0Mzk4OTM5ZDNlOGY0NjA1MTlmNDIiLCJlbWFpbCI6Imtlc2hhdi50aGFrdXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3NzgzOTA5NjUsImV4cCI6MTc3ODM5NDU2NX0.MBBOzNGyGtrKMH-XNlb3AtmC3ATAKZZo7Xzh5pXLJM4";

const DDos= async ()=>{
   const res= await fetch("http://localhost:3000/user", {
    headers:{
        Cookie:`token=${token}`
    }
   });
   const data=await res.text();
   console.log(data);
}

for(let i=0;i<100;i++)DDos();