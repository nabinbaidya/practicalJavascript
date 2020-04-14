// ToDo list JavaScript

var todo = {
      
  todos: [], //todos property with empty array of todo list items

  //function to view todolist items
  viewTodo: function(){
  var totalTodos = this.todos.length;
  var completedTodos = 0; //initialize variable to count completed tasks

  if(totalTodos === 0){
    console.log("ToDo list is empty");
  }
    else {
      //Display todolist 
      console.log("My todolist:\n");
      for (var i=0; i<totalTodos; i++){
        if(this.todos[i].completed === true){
          console.log("(x) ", this.todos[i].todoItem);
          completedTodos++;
        } else {
          console.log("( ) ", this.todos[i].todoItem);
        }
      }

      //Display remaining tasks
      if(completedTodos === 0){
        console.log(`All ${totalTodos} tasks remains to be completed.`);
      } else if (completedTodos === totalTodos) {
        console.log(`All ${completedTodos} tasks are finished.`);
      } else {
        console.log(`${completedTodos} of ${totalTodos} tasks are done.`);
      }
    }
  },

  //function to add new items to the todolist
  addTodo: function(newItem){
    this.todos.push({
      todoItem: newItem,
      completed: false
    });
    this.viewTodo();
  },

  //function to edit items in the todolist
  editTodo: function(position, newItem){
    this.todos[position].todoItem = newItem;
    this.viewTodo();
  },

  //function to toggle completed items in the todolist
  toggleCompleted: function(position){
    this.todos[position].completed = !this.todos[position].completed;
    this.viewTodo();
  },

  //function to toggle all items in the todolist
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0; //initialize variable to count completed tasks

    for(var i =0; i<totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }

    if(completedTodos === totalTodos)
      {
        for(var i=0; i<totalTodos; i++)
        {
          this.todos[i].completed = false;
        }
      } 
      else {
        for(var i=0; i<totalTodos; i++)
        {
          this.todos[i].completed = true;
        }
      }

    this.viewTodo();
  },

  //function to inverse toggle non-selected items in the todolist
  inverseToggle: function() {
    for(var i=0; i<this.todos.length; i++){
      this.todos[i].completed = !this.todos[i].completed;
    }
    this.viewTodo();
  },

  //function to delete items from the todolist
  delItem: function(position){
    this.todos.splice(position, 1);
    this.viewTodo();
  }
};

console.log(document);
var viewTodoBtn = document.getElementById('viewTodoBtn');
console.log(viewTodoBtn);

viewTodoBtn.addEventListener('click', function(){
  todo.viewTodo();
});
