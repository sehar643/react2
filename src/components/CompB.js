import React, { useState } from 'react'

const CompB = () => {

  const [n , setN] = useState(10)
  const [m , setM] = useState(10)

  return (
    <div>
        <h1>N = {n} </h1>
        <h1>M = {m} </h1>
        <button onClick={() => {setN(n + 1)}}>Click N</button>
        <button onClick={() => {setM(m + 1)}}>Click M</button>
    </div>
  )
}

export default CompB



