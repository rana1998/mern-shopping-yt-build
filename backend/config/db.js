require('dotenv').config();
const mongoose = require('mongoose');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});

const connectDB = async () =>
{
    try{
        //  await mongoose.connect("mongodb://Kshitij123:kshitij_crud14@cluster0.fdv7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true});
         mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true
});
        console.log("MongoDB connection success");
    }
    catch(error)
    {
        console.log("mongoDB connection fail" +  error);
        process.exit(1);
    }
}

module.exports = connectDB;