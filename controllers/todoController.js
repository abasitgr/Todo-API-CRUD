const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res) => {
    await Todo.find()
        .then(todo => {
            res.status(200).json(todo)
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
}

exports.addTodo = async (req, res) => {
    const { content } = req.body;

    if (!content) {
        res.status(400).json({
            message: 'Content is required'
        })
        return;
    }

    const newTodo = new Todo({
        content
    })

    await newTodo.save()
        .then((todo) => {
            res.status(201).json({
                message: 'Todo Created Successfully',
                data: todo
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
}

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { content, completed } = req.body;

    if (content == "" || !content) {
        res.status(400).json({
            message: 'Content is required'
        })
        return;
    }

    await Todo.findByIdAndUpdate(id, { content: content }, { new: true })
        .then(todo => {
            res.status(200).json({
                message: 'Todo Updated',
                data: todo
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'Todo Not Found'
            })
        })
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id, { new: true })
        .then(() => {
            res.status(200).json({
                message: 'Todo Deleted'
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'Todo Not Found'
            })
        })
}