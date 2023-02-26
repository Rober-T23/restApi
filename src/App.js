import express  from "express";
import morgan from "morgan";
import router from "./Routes/language.routes";
const app = express();

//settings
app.set("port", 3001)

// Middleware
app.use(morgan("dev"));

//Routes
app.use('/programs',router);

export default app;
