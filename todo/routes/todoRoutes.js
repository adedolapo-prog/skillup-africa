const router = require('express').Router();
const {v4: uuidv4} = require("uuid");

// CRUD
const todosDB = [];

/**
 * List all todos
 */
router.get('/', (req, res) => {

  res.json({"code" :"SUCCESS", "success": todosDB, "error":null});
  
});
/**
 * Create a Todo - unique id, description, isCompleted // application/json
 */
router.post('/', (req, res) => {
  
  let newTodo = {
    "uniqueId" : uuidv4(),
    "description": req.body.description,
    "isCompleted": false
  }

  todosDB.push(newTodo)

  res.status(201).json({"code" :"SUCCESS", "success": newTodo, "error":null})

});  

/**
 *  Get a Todo by unique id
 */
router.get('/:id', (req, res) => {
  let todoId = req.params.id;
  
  let foundTodo = todosDB.find((todo) => todo.uniqueId == todoId)
  if (foundTodo) {
  res.json({"code" :"SUCCESS", "success": foundTodo, "error":null});
  } else {
  // TODO return a proper response to the user when no todo is found.
  res.json({"code" :"error", "error": err})
  }
}); 


router.delete('/:id', (req, res) => {

  // TODO Implement this route 
  res.send('todo deleted');

});  

module.exports = router;
