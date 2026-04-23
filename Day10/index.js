import express from "express";
import User from "./models/schema.js";
import main from "./database.js";

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    await User.insertOne(req.body);
    res.send("Inserted Success...");
  } catch (err) {
    console.log(err);
  }
});

app.get("/user", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const info_user = await User.findById(id);
    res.send(info_user);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User Deleted!!!");
  } catch (err) {
    console.log(err);
  }
});


app.patch("/user",async (req,res)=>{
    try{
        const {_id, ...update}=req.body;
        await User.findByIdAndUpdate(_id,update);
        res.send("User-info updated Successfully...");
    }
    catch(err){console.log(err)};
})

main()
  .then(() => {
    console.log("Database Connected Successfully...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
