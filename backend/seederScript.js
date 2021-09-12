require('dotenv').config();

const productsData = require('./data/products');
const connectDB  = require('./config/db');
const Product = require('./models/Product');


connectDB();

const importData =  async () =>
{
    try{
         await Product.deleteMany({});
        console.log(Product);
        //  console.log(productsData);

         await Product.insertMany(productsData,()=>
         {
             console.log("Saved");
             process.exit();
         });
    
    }
    catch(error)
    {
        console.log("Error with data import" + error);
        process.exit(1);
    }
}

importData();