const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Data base connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in database connection", error);
  }
};

module.exports = connectDB;
