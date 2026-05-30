import axios from "axios";

const getlanguageById = (lang) => {
  lang = lang.toLowerCase();

  const language = {
    "c++": 54,
    "java": 62,
    "javascript": 63,
    "python": 71
  };

  return language[lang];
};

const submit = async (submissions) => {
  try {
    const options = {
      method: "POST",
      url: "https://ce.judge0.com/submissions/batch",
      params: {
        base64_encoded: "false",
        wait: "true",
      },
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        submissions:submissions
      },
    };

    const response = await axios(options);
    return response.data;
  } catch (err) {
    console.log("Error:", err.message);
    throw err;
  }
};


const submitToken= async (submissions)=>{
   const token=submissions.map((data)=>data.token).join(',');
   try{
     while(true){
      const result=await axios.get(`https://ce.judge0.com/submissions/batch?tokens=${token}&base64_encoded=false`);
      const results=result.data.submissions;
      const IsResultObtained=results.every((r)=>r.status.id>2);
      if(IsResultObtained)return results;
      await new Promise((resolve) => setTimeout(resolve, 1000));
     }
   }
   catch(err){
      console.log("Error: "+err.message);
   }
}
export  { getlanguageById, submit , submitToken};