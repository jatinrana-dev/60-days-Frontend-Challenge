import React from 'react'

const Expressions = () => {
const name = "Jatin Rana"
const multiply = (a,b) => a*b ;
const specialClass = "anything-i-want"

  return (

  
    <div>
         <h1>My name is {name}</h1>
        <p> 2+2={2+2}</p>
        <p>2*10= {multiply(2,10)}</p>
        <p className={specialClass} >This is special class</p>

     
    </div>
  )
}

export default Expressions
