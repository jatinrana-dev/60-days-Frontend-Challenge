import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
    console.log(count)
    console.log("the content is rendering")
  return (

    <div>
        <h1>count is {count} </h1>
        <button
        onClick={ ()=>{
            setCount(count +1)
        }
        }
        >
            Increase</button>
      
    </div>
  )
}

export default Counter
