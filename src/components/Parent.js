import React from 'react'
import {Child} from './Child.js';
import {useState} from 'react';

export const Parent = () => {

    const [todos, setTodos]=useState([{task: 'Learn React',complete: false},{task: 'Build a react app',complete: false},{task: 'Deploy the React App',complete: false}]);

    const handleComplete=(itemvalue)=>
    {
       
        let newtodolist=todos.map((item)=> {if(item.task===itemvalue){return {task: item.task, complete: true}} else{return item}});

        setTodos(newtodolist);
    }


  return (
    <>
    <h1 style={{textAlign: 'center',}}>Parent Component</h1>
    <Child todos={todos} handleComplete={handleComplete}/>
    </>
  )
}
