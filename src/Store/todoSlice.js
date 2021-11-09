import {createSlice} from '@reduxjs/toolkit'

const initialState={
  list:[],
  toggle:true,
  username:'',
  email:''
}

const todoSlice=createSlice({name:"first",initialState,reducers:{
  add:(state,action)=>{
    state.list=[...state.list,action.payload]
  },
  del:(state,action)=>{
    var arr=state.list.filter((item,index)=>{return index!==action.payload})
    state.list=arr
  },
  modify:(state,action)=>{
    state.toggle=!state.toggle
    state.username=action.payload.nm
    state.email=action.payload.em
  }
}})

export const {add,del,modify}=todoSlice.actions
export default todoSlice.reducer