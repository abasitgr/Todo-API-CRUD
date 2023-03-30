const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todoController');

// Get All Todos
router.get('/todos/', todoController.getAllTodos);

// Add Todo
router.post('/todos/add', todoController.addTodo);

// Update Todo
router.put('/todos/update/:id', todoController.updateTodo);

// Delete Todo
router.delete('/todos/delete/:id', todoController.deleteTodo)

module.exports = router;