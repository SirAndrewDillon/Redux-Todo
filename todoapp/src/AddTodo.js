import React, {Component} from 'react'


class AddTodo extends Component {
    state = {
        content: ''
    }
    //Helper Method
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    //Helper Method
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }


    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <label>Add A New Task:</label>
                  <input type="text" onChange={this.handleChange} value={this.state.content}/>
                  </form>  
            </div>
        )
    }
}


export default  AddTodo;

