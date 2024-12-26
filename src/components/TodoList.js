import React from 'react'

export const TodoList = ({todos, handleComplete}) => {



  return (
    <>
    <h2 style={{textAlign: 'center',}}>Child Component</h2>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
       
       {
        todos.map((item, index)=> <li key={index}>{item.task} {!item.complete && <button onClick={()=>handleComplete(item.task)}>Complete</button>}</li>)
       }
    
        </ul>
        </div>
    </>
  )
}
