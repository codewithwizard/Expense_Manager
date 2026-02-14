import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/index.js';
import app from './app.js';

app.get('/',(req,res) => {
    res.send("Hello world")
})

connectDB()
.then( () => {

    app.listen(process.env.PORT || 4175, () => {
        console.log("Server is running at PORT : " + process.env.PORT);
    } )
})
.catch( (err) => {
    console.log("MongoDB connection failed , ERROR: ",err);
} )
