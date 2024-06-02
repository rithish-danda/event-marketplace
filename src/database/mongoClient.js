import { MongoClient } from "mongodb";

const uri = "mongodb+srv://rithishdanda:cptnemo@cluster0.bgiqwyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export async function disconnectFromDatabase() {
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
}

export async function checkUserEmail(email) {
  const db = client.db("Events");
  const collection = db.collection("users");
  const user = await collection.findOne({ email });
  return user !== null;
}

export async function createUser(userData) {
  const db = client.db("Events");
  const collection = db.collection("users");
  // Hash password before storing (replace with your hashing logic)
  userData.password = hashPassword(userData.password);
  await collection.insertOne(userData);
}
