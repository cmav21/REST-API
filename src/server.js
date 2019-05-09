// import express, {json} from 'express';
//Another way to import json

const app = express();

//Routes
import express from 'express';
import router from "./routes/index.routes";
import TaskRoutes from "./routes/task.routes"

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware, functions which are executed before access to routes
app.use(express.json());//This to understand the json format


//Routes
app.use(router);
app.use('/tasks',TaskRoutes);

export default app; 