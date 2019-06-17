import React, { Component } from 'react'

//=====Components=====//
import Todos from './Todos'

 class App extends Component {
   state = {
     todos: [
       {id: 1, content: 'Walk the dog.'},
       {id: 2, content: 'Play Mario Cart.'}
     ]
   }
  render() {
    return (
      <div>
        <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
    </div>
      </div>
    )
  }
}


export default App;
