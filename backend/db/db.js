const mongoose = require('mongoose'); // Corrected mongoose spelling

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/expense-tracker', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected!!!");
    } catch (error) {
        console.log("Not Connected!!", error);
    }
};

module.exports = connectDB;
