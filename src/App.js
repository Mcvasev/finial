import React from 'react';
import Task from './components/Task';
import './index.css';
import Taskinput from './components/Taskinput';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
      { id: 1, title: "Создать органайзер1", done: false},
      { id: 2, title: "органайзер2 Создать", done: false},
      { id: 3, title: "4Создать органайзер", done: false}
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
        id: tasks.length !==0 ? tasks.length + 1 : 0,
        title: task,
        done: false 
        
      });
      return tasks;
    });
  }

  sortTaskUp = () => {
    this.setState(state => {
      let { tasks } = state;
      tasks.sort((a, b) => +a.title > +b.title ? 1 : -1);
      console.log(tasks)
      return tasks;
    })
  }

  sortTaskDown = () => {
    this.setState(state => {
      let { tasks } = state;
      tasks.sort((a, b) => +a.title < +b.title ? 1 : -1);
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
      <div className="btnSrt">
        <button className="grayB" onClick={this.sortTaskUp}> </button>
        <button className="grayBsort" onClick={this.sortTaskDown}> </button>
      </div>  
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
