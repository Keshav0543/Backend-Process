import { MongoClient } from "mongodb";
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://Keshav_MRROBOT:%40%40%40%40%40%40%40%40%21k1K@cluster0.0ysv0vg.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

// const findResult = collection.find({});
// for await (const obj of findResult)console.log(obj.name);

const insertResult = await collection.insertMany([{ "name": "Rahul Sharma", "age": 25, "city": "Mumbai" },
{ "name": "Aman Verma", "age": 21, "city": "Delhi" },
{ "name": "Priya Singh", "age": 24, "city": "Bangalore" },
{ "name": "Neha Gupta", "age": 22, "city": "Hyderabad" },
{ "name": "Rohit Patil", "age": 26, "city": "Pune" }]);
console.log('Inserted documents =>', insertResult);

return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


//Homework
//If database exist nahi karta hoga toh what will happen
// will it create a database for me
// Or it Just throw Error