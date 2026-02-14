import express, { urlencoded } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN, 
    credentials : true  // allows cookies and authentication headers
}))

app.use(express.json({limit : "20kb"})) 
app.use(urlencoded({extended: true, limit: "20kb"})) // allows data from HTML Form


export default app;

