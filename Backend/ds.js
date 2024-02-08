const mongoose = require("mongoose");
require("dotenv").config();
const MDrouter = express.Router();
const Usermodel = require("./module/user");

const startDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};

const stopDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log("📦 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error disconnecting from MongoDB:", error.message);
  }
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
};

MDrouter.get("/users", (req, res) => {
  Usermodel.find()
    .then((users) => res.json(users))
    .catch((error) => res.json(error.message));
});

MDrouter.get("/Images", (req, res) => {});

module.exports = { startDatabase, stopDatabase, isConnected, MDrouter };
