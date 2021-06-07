import React from 'react';
import Task from './components/Task';
import './index.css';
import Taskinput from './components/Taskinput';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
      // { id: 0, title: "Создать органайзер", done: true},
      { id: 1, title: "Создать органайзер1", done: false},
      { id: 2, title: "Создать органайзер2", done: false},
      // { id: 3, title: "Создать органайзер3", done: true},
      { id: 4, title: "Создать органайзер4", done: false}
    ]
    }
  } 

  doneTasks = id => {
    const index = this.state.tasks.map(task => task.id).index(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
   }
  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  }  
    
  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !==0 ? task.length : 0,
        title: task,
        done: false 
      });
      return tasks;
    });
  }

  sortTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.sort((a, b) => a.title > b.title ? 1 : -1);
      console.log(tasks)
      return tasks;
    })
  }

  render() {

    const { tasks} = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done)

    return <div className="App">
      <div className="YellowLine"></div>
      <h1 className="todo">To-Do List</h1>
      <p className="tasks">Активных задач: {activeTasks.length}</p>
      <button className="grayB" onClick={this.sortTask}> </button>
      <div className="tasklist">{[...activeTasks, ...doneTasks].map(task => (
        <Task 
        doneTasks={()=> this.doneTask(task.id)}
        deleteTask={()=> this.deleteTask(task.id)}
        task={task} 
        key={task.id}>

        </Task>
      ))}
      </div>
      <Taskinput addTask={this.addTask}></Taskinput>
      </div>;
  }
}

export default App;
