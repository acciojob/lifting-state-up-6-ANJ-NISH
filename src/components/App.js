
import React, {useState} from "react";
import './../styles/App.css';
import { TodoList } from "./TodoList";

const App = () => {
  const [todos, setTodos]=useState([{task: 'Learn React',complete: false},{task: 'Build a react app',complete: false},{task: 'Deploy the React App',complete: false}]);
  
      const handleComplete=(itemvalue)=>
      {
         
          let newtodolist=todos.map((item)=> {if(item.task===itemvalue){return {task: item.task, complete: true}} else{return item}});
  
          setTodos(newtodolist);
      }
  
  
    return (
      <div>
      <h1 style={{textAlign: 'center',}}>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete}/>
      </div>
    )
}

export default App
