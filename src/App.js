import React,{ Component } from 'react';


class App extends Component {
  constructor(){
    super()
      this.state = {
        todos:[{todoText:'todo1',isChecked:false},{todoText:'todo2',isChecked:false},{todoText:'todo3',isChecked:false}]
      };
      // this.addTodo = this.addTodo.bind(this)
    }

    // todoList = this.state.todos.map((todo) => {
    //   console.log(todo);
    // })

    addTodo(event){
      event.preventDefault();
      // console.log(event.target.todo.value);
      const todoData = event.target.todo.value
      this.setState(prevState => {
      return {
        todos: prevState.todos.concat(todoData)
      }})
    }
  
    isChecked(event){
      
      console.log(event.target.checked)
      const checked = event.target.checked 
      const todoValue = event.target.nextSibling.textContent
      this.setState((state) => {
        const todos = state.todos.map((todo) => {
            if(todo.todoText === todoValue && checked){
               todo.isChecked = true
            }
        })
        return {todos
        
      }
     
    }
    

  
   
    
  

  render(){
    return (
      <div className="todo-app">
        <form id="todo-form" onSubmit={this.addTodo.bind(this)}>
          <input type="text" name="todo"></input>
          <button type="submit">Add</button>
          <button id="delete">Delete</button>
        </form>
       
        <ul>
          <div class="todo-list"><input type="checkbox" onClick={this.isChecked.bind(this)}></input><li>Sample Todo</li></div>
            {this.state.todos.map((todo) => { 
               return <div class="todo-list"><input type="checkbox" onClick={this.isChecked.bind(this)}></input><li>{ todo.todoText }</li></div> 
                  }
                )
           }
        </ul>
      </div>
    );
  }
}

export default App;