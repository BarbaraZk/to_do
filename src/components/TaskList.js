import React from 'react';
import "./TaskList.css";
import Task from "./Task";


const TaskList = (props) => {
  const active = props.tasks.filter(task=>task.active===true);
  const done = props.tasks.filter(task=>task.active===false);
 
  if(active.length>2){
  console.log(active)
    active.sort((a,b)=>{
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if(a < b){
        return -1
      }
      if(a > b){
        return 1
      }
        return 0
  })
  }
  const activeTasks = active.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>);
  const doneTasks = done.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>)
  return ( 
  
    <div class="cointainer">
      <div class="row ">
        <div class="column ">
          <div id="heading">
          <p> To do: {active.length} </p>
          </div>
       {active.length >=1 ? activeTasks : ""}
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div id="heading">
          <p> Done: {done.length} </p>
          </div>
       {done.length >=1 ? doneTasks : ""}
        </div>
      </div>
    </div>
    );
}
 
export default TaskList;


