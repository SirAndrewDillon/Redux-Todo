import React, { Component } from 'react'

//=====Components=====//
import Todos from './Todos'
import AddTodo from './AddTodo'

 class App extends Component {
   state = {
     todos: [
       {id: 1, content: 'Walk the dog.'},
       {id: 2, content: 'Play Mario Cart.'}
     ]
   }
   deleteTodo = (id) => {
     console.log(id);
     const todos = this.state.todos.filter(todo => {
       return todo.id !==id
     });
     this.setState({
       todos
     })
   }
   addTodo = (todo) => {
      todo.id = Math.random();
      let todos =[...this.state.todos, todo];
      this.setState({
        todos: todos
      })
   }


  render() {
    return (
      <div>
        <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
    </div>
      </div>
    );
  }
}


export default App;
