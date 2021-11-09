import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {modify} from './Store/todoSlice'

function Input(){
  const state=useSelector(state=>state.todoSlice)
  const dis = useDispatch()
  return(
    <>
    <div>{state.username}</div>
    <div>{state.email}</div>
    <button onClick={()=>{dis(modify({nm:'',em:''}))}}>LogOut</button>
    </>
  );
}

export default Input;