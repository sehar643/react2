import React, { useState } from 'react'

const CompA = () => {

  const [n , setN] = useState(10)
  const [m , setM] = useState(10)

  // let num = 1;

  const clickHandler1 = () => {
    setN(n + 1)
  }

  const clickHandler2 = () => {
    setM(m + 1)
  }

  // function clickHandler(){
  //   alert("hello")
  // }

  return (
    <div>
        <h1>N = {n} </h1>
        <h1>M = {m} </h1>
        <button onClick={clickHandler1}>Click N</button>
        <button onClick={clickHandler2}>Click M</button>
    </div>
  )
}

export default CompA