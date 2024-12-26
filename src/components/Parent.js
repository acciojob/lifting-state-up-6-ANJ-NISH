import React from 'react'
import {Child} from './Child.js';
import {useState} from 'react';

export const Parent = () => {

    const [todos, setTodos]=useState([['Learn React',false],['Build a react app',false],['Deploy the React App',false]]);

    const handleComplete=(itemvalue)=>
    {
       
        let newtodolist=todos.map((item)=> {if(item[0]===itemvalue){return [item[0],true]} else{return item}});

        setTodos(newtodolist);
    }


  return (
    <>
    <h1 style={{textAlign: 'center',}}>Parent Component</h1>
    <Child todos={todos} handleComplete={handleComplete}/>
    </>
  )
}
