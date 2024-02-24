import React, { useState } from 'react'

const CompD = () => {

    const [btn , setBtn] = useState(true)

    const toggleText = () => {
        setBtn(!btn)
    }

  return (
    <div>
        
        {btn && <p>Welcome to our website</p>}

        <button onClick={toggleText}>
            {btn ? "Hide" : "Show"}
        </button>
    </div>
  )
}

export default CompD