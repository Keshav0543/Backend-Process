import validation from "validator";

function ValidInput(data){
     const IsRequired=["firstName","email","password", "age"];
    
     const IsValid=IsRequired.every((k)=>Object.keys(data).includes(k)); 
    
    if(!IsValid)throw new Error("Field Missing...");

    if(!validation.isEmail(data.email)) throw new Error("Invalid Email...");
    if(!validation.isStrongPassword(data.password)) throw new Error("Weak Password...");

    if(!(data.firstName.length>=3 && data.firstName.length<=20)) throw new Error("Name should be atleast 3 char and atmost 20 char");
}

export default ValidInput;