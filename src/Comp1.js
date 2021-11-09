import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {add} from './Store/todoSlice'


function Comp1(){
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [date,setDate]=useState('')
  const state=useSelector(state=>state.todoSlice)
  const dispatch=useDispatch()
 return(
      <>
      <div>{console.log(state)}</div>
      <input onChange={(event)=>{setTitle(event.target.value)}} type="text" name="title"/>
      <input onChange={(event)=>{setDescription(event.target.value)}} type="text" name="Description"/>
      <input onChange={(event)=>{setDate(event.target.value)}} type="date" name="date"/>
      <button onClick={()=>{dispatch(add({t:title,de:description,dt:date}))}}>add</button>
      </>
  );
}

export default Comp1;
