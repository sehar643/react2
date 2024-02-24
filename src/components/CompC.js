import React, { useState } from 'react'

const CompC = () => {

    const[x , setX] = useState(0)
    // const[y , setY] = useState(0)
    let price = 5500;

    const incHandler = () => {
        setX(x+1)
    }

    const decHandler = () => {
        if (x > 1){
            setX(x-1)
        }
    }

  return (
    <div>
        <button onClick={incHandler}>+</button> &nbsp;
        {x} &nbsp;
        <button onClick={decHandler}>-</button>
        {<h1>Total Price: {x*price}</h1>}
    </div>
  )
}

export default CompC



{/* <button onClick={()=>setX(x+1)}>+</button>
        {x}
        <button onClick={()=>setX(x-1)}>-</button>
        <h1>Total Price: {x*price}</h1> */}