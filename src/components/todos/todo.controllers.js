import Todo from "../../models/todos.model.js";

export const getAllCompletedTrue = async (req, res) => {
    try {
        const todos = await Todo.findAll({
            where: {
                completed: true,
            },
        });
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getAllCompletedFalse = async (req, res) => {
    try {
        const todos = await Todo.findAll({
            where: {
                completed: false,
            },
        });
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getTodosById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        res.json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const postTodos = async (req, res) => {
    try {
        const { body } = req;
        const todo = await Todo.create(body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const putById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const todo = await Todo.update(body, {
            where: { id },
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};

export const patchById = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const todo = await Todo.update(body, {
            where: { id },
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.destroy({
            where: { id },
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};
