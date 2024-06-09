import React from 'react';
import AddTask from "./AddTask";
import TaskList from './TaskList';
import "./App.css";

class App extends React.Component {
  counter =0
  state = { 
    tasks:[]
   } 

  addTask=(text)=>{
    const task = {id:this.counter, name:text, active:true}
    this.counter++
    let tasks =[...this.state.tasks]
    tasks.push(task)
    this.setState({
      tasks
    })
    console.log(task)
    return true
   }

   deleteTask=(id)=>{
    let tasks = [...this.state.tasks]
    tasks= tasks.filter(task=>task.id!==id)
    this.setState({
      tasks
    })
   }

   changeStatus=(id)=>{
    let tasks =[...this.state.tasks]
    tasks = tasks.map(item=>{
      if(item.id===id){
        item.active=false;
      }
      return item
    })
    this.setState({
      tasks
    })
   }
   
  render() { 
    return (
      <div className="app" >
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeStatus}/>
      </div>
    )
  }
}
 
export default App;
