const obj = {
  name: "Keshav",
  age:23,
  branch:"MCA",

  newobj: function(){
    const inner=()=>{
      console.log(this.name);
    }
    inner();
  }
};

obj.newobj();