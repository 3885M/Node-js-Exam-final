const mongoose = require("mongoose");

let DataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shaikhmukhtar2141:12345@cluster0.ruubnx8.mongodb.net/rExam"
    );
    console.log("Database Connected....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DataBase;