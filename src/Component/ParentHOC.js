import React, { useState } from 'react'

function ParentHOC() {
    const[count,setCount]=useState(0);
  return (
    <div className='HocCenter'>
      <h1>Count Number:{count}</h1>
      <button onClick={(()=>setCount(count+1))} className='HocBtn'>Increment</button>
      <button onClick={(()=>setCount(count-1))} className='HocBtn'>Decrement</button>
    </div>
  )
}

export default ParentHOC
