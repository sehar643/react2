import React, { useState } from 'react'

const CompE = () => {

    const [txt , setTxt] = useState("black")

  return (
    <div>
        <h2 style={{color:txt}}> Welcome </h2>
        <button onClick={() => {setTxt((prevColor) => (prevColor === "black" ? "red" : "black"))}}>Click</button>
    </div>
  )
}

export default CompE


// const handleButtonClick = () => {
//     setTxt((prevColor) => (prevColor === "black" ? "red" : "black"));
//   };

 // const clrHandler = () => {
    //     setTxt("red")
    // }
