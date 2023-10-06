import express from "express";
import Todo from "./models/todos.model.js";
import db from "./utils/database.js";
import "dotenv/config";
import cors from "cors";
import todosRouter from "./components/todos/todo.routes.js";

Todo;

const PORT = process.env.PORT ?? 8000;
const app = express();

app.use(express.json(), cors(), todosRouter);

db.authenticate()
    .then(() => {
        console.log("Conexion Correcta");
    })
    .catch((err) => console.log(err));

db.sync()
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server activo y escuchando en el puerto ${PORT}`);
});
