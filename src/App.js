

import React, { Component } from 'react'

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      userName : 'Vinayak',
      toDoList : [
        {id:1, task:'Session at 9AM', done:false},
        {id:2, task:'Session at 10AM', done:false},
        {id:3, task:'Session at 11AM', done:true},
        {id:4, task:'Session at 12AM', done:false},
        {id:5, task:'Session at 3PM', done:true},
      ],
      newToDo:'' 
    }

  }

  render() {
    return (
      <div className='container'>
        <div className='bg-primary py-3 text-center'>
          <h3 className='text-light'>{this.state.userName}'s To-Do list</h3>
        </div>
        <div className="input-group my-3">
          <input type="text" className="form-control" placeholder="Enter new To-Do" aria-label="Enter new To-Do" aria-describedby="button-addon2"></input>
          <button class="btn btn-outline-primary" type="button" id="button-addon2">Submit</button>
        </div>

        <table class="table table table-bordered-primary">
  <thead>
    <tr>
      <th scope="col">
        <h5>#</h5>
      </th>
      <th scope="col">
        <h5>
          Task
        </h5>
      </th>
      <th scope="col">
        <h5>
          Status
        </h5>
      </th>
    </tr>
  </thead>
  <tbody>
    {this.state.toDoList.map((todo) => (
      <tr>
        <th scope="row">{todo.id}</th>
        <td>{todo.task}</td>
        <td>{todo.done}</td>
      </tr>
    ))}
    
  </tbody>
</table>

      </div>
    )
  }
}

export default App