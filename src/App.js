import React from 'react';

import Comp1 from './Comp1';
import Comp2 from './Comp2'
import Input  from './Input';
import Authentication from './Authentication'
import {useSelector} from 'react-redux'



function App() {
  const state=useSelector(state=>state.todoSlice)
  return (
    <>
    {state.toggle?<Authentication/>:
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="items" style={{border:"solid black",padding:"20px"}}>
       <Input/>
       </div>
       <div className="items">
       <div style={{border:"solid black",padding:"20px"}}><Comp1/></div>
       <div style={{border:"solid black",padding:"20px"}}><Comp2/></div>
       </div>
      </div>}
    </>
  );
}

export default App;