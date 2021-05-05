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
  res.json({"code" :404, "message" : "no todo is found", "error": err})
  }
}); 


router.delete('/:id', (req, res) => {
  let todoID = req.params.id
  
  let toDelete = todosDB.find((todo) => todo.uniqueId == todoId)
  let index = todosDB.indexOf(toDelete)
  if (index > -1) {
    todosDB.splice(index, 1)
  // TODO Implement this route 
  res.send('todo deleted');
  } else {
    res.json({"code" :404, "message" : "no todo is found", "error": err})
  }
});  

module.exports = router;
