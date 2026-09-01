import React,{ useState } from 'react'

const About = () => {
    let [count,setCount] =useState(0)
    console.log(count)
    let [flag,setFlag]=useState(true)
    console.log(flag)
  return (
    <div>
        <div>
        <h1>Count is - {count}</h1>
        <button onClick={()=>
        {
            setCount(count +1)
        }
        

        }>Increment</button>
        </div>
<div>
<button>Boolean</button>
</div>

      
    </div>
  )
}

export default About
