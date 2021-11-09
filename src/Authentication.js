import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {modify} from './Store/todoSlice'

function Authentication(){
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const authorise=()=>{
  if(name==="Prasanna" && password==="Angadi"){ 
    dispatch(modify({nm:"Prasanna",em:"prasu@protomail.com"}))
  }
  if(name==="Prasannaa" && password==="Angadii"){
    dispatch(modify({nm:"Prasannaa",em:"prasuu@protomail.com"}))
  }
  }
  return (
    <>
    <div stle={{disply:"flex",justifyContatnt:"center",alignItems:"center",border:"solid black",padding:"20px",height:"90vh"}}>
    <input onChange={(event)=>{setName(event.target.value)}}type="text" name="username"placeholder="username"/>
    <input onChange={(event)=>{setPassword(event.target.value)}}type="text" name="password"placeholder="password"/>
    <button onClick={authorise}>Submit</button>
    </div>
    </>
  );
}
export default Authentication;