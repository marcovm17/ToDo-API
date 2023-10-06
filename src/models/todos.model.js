import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Todo = db.define("todos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(50),
        defaultValue: "Does not have a description",
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Todo;
