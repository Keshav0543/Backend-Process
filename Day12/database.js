import mongoose from "mongoose";

async function main() {
    await mongoose.connect('mongodb://Keshav_MRROBOT:%40%40%40%40%40%40%40%40%21k1K@ac-3csxeis-shard-00-00.0ysv0vg.mongodb.net:27017,ac-3csxeis-shard-00-01.0ysv0vg.mongodb.net:27017,ac-3csxeis-shard-00-02.0ysv0vg.mongodb.net:27017/instagram?ssl=true&replicaSet=atlas-5bi3ei-shard-0&authSource=admin&appName=Cluster0');
}

export default main;