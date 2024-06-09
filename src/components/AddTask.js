import React from 'react';
import "./AddTask.css";
class AddTask extends React.Component {
  state = { 
    text:""
  } 
   
  handleTask=(e)=>{
    this.setState({
      text: e.target.value
    })
  }

  handleClick=()=>{
    const {text}= this.state;
    if(this.state.text){
      const addTask = this.props.add(text)
      if(addTask){
        this.setState({
          text:"",
        })
      }}else {
        alert ("please add task")
        }
    }
     
    render() { 
        return (
        <div class ="box">
          <input type="text" placeholder="Add Task" value={this.state.text} onChange={this.handleTask}  />
            <button onClick={this.handleClick} class="add"> + </button>
           </div>
        )
    }
}

 
export default AddTask;

