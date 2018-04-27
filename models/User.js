const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
        userName: String,
        carId: String,
        phoneNumber: String,
        problem: String,
        isDriver: Boolean,
        isSolved: Boolean,
        profileImage: String,
        location:
        {
            latitude: Number,
            longitude: Number
        }  
});
module.exports = mongoose.model("User", UserSchema);