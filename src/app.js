import express, { urlencoded } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN, 
    credentials : true  // allows cookies and authentication headers
}))

app.use(express.json({limit : "20kb"})) 
app.use(urlencoded({extended: true, limit: "20kb"})) // allows data from HTML Form

// importing and implement routes

import userRouter from "./routes/user.route.js"
app.use("/api/users", userRouter);

import expenseRouter from "./routes/expense.route.js"
app.use("/api/expense", expenseRouter);

import categoryRouter from "./routes/category.route.js"
app.use("/api/category", categoryRouter);

import subcategoryRouter from "./routes/subcategory.route.js"
app.use("/api/subcategory", subcategoryRouter);

import peopleRouter from "./routes/people.route.js"
app.use("/api/people", peopleRouter);

import incomeRouter from "./routes/income.route.js"
app.use("/api/income", incomeRouter);

import projectRouter from "./routes/project.route.js"
app.use("/api/project", projectRouter);

export default app;

