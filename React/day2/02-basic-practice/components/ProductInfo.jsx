import React from 'react'

const ProductInfo = () => {
    const product = {
        name:"Laptop",
        price: 1200,
        availability : "instock"
    }


  return (
    <div>
        <div>
           <h1>
            Name:{product.name}</h1> 
            <h1>Price:{product.price}</h1>
            <h1>Availabitliy:{product.availability}</h1>
            </div>

    
      
    </div>
  )
}

export default ProductInfo
