import React from 'react';
import "./Task.css";


const Task = (props) => {
  const {id,name,active} = props.task;
    if(active){
      return ( 
        <div class="column">
          <div class="item">
            <input type="checkbox" onClick={()=>props.changeStatus(id)}  />
            <div class = "active">{name}</div>
            <button onClick={()=>props.delete(id)} class ="btnDelete"><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
        </div>) 
    }
    else {
      return(
        <div class="column">
          <div class="item">
            <div class = "done text">{name}</div>
            <button onClick={()=>props.delete(id)} class ="btnDelete"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
          </div>
        )
    }
}
 
export default Task;

