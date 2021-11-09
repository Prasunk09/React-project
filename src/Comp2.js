import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {del} from './Store/todoSlice'

function Comp2(){
  const state=useSelector(state=>state.todoSlice)

  const dispatch=useDispatch()

  return(
    <>
    {state.list.map((item,index)=>{
      return(
        <div key={index}>
        <div>{item.t}</div>
         <div>{item.de}</div>
          <div>{item.dt}</div>
          <div><button onClick={()=>{dispatch(del(index))}}>Delete</button></div>
       </div>

      )
    })}
    </>
  )
}

export default Comp2;