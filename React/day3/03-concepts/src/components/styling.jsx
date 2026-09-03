import React from 'react'
import { FaPaperPlane } from "react-icons/fa";



const Styling = () => {
    const a = {color: "white", backgroundColor:"lightGreen", padding:"2rem"}

  return (
    <div>
      <h1 style ={{color: "blue", backgroundColor:"teal", padding:"2rem"}}>This is React </h1>

      <h1 style={a}>This is the second method to give styling in the React</h1>

      <h1>Importing Icons  <FaPaperPlane />
</h1>
    </div>
  )
}

export default Styling
