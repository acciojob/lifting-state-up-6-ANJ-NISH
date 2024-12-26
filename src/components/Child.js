import React from 'react'

export const Child = ({todos, handleComplete}) => {



  return (
    <>
    <h2 style={{textAlign: 'center',}}>Child Component</h2>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
       
       {
        todos.map((item, index)=> <div key={index} style={{display: 'flex'}}><li>{item[0]}</li> &nbsp;&nbsp; {!item[1] && <button onClick={()=>handleComplete(item[0])}>Complete</button>}</div>)
       }
    
        </ul>
        </div>
    </>
  )
}
