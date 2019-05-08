const app = express();

//Routes
import express from 'express';
import router from "./routes/index.routes";
import TaskRoutes from "./routes/task.routes"

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware, funciones que se ejecutan antes de ejecutar las rutas


//Routes
app.use(router);
app.use('/tasks',TaskRoutes);

export default app; 