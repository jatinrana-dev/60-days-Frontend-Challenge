import React from 'react'



const ProductsCardui = ({product , del}) => {
    
  return (
<div className="w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300" >
      <img
    src={product.image} alt=""
       
        className="w-full h-48 object-contain bg-gray-50 p-4"
      />
      <div className="p-4">
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
          <h1> {product.category}
          </h1>
        </span>
        <h2 className="text-md font-semibold text-gray-800 mt-1 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-lg font-bold text-gray-900 mt-2">
          {product.price}
          
        </p>
        <button
        onClick={()=>{
            del(product.id)
        }}
          
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition-colors duration-200"
        >
          Delete
        </button>
        <img  />
      </div>
    </div>
  
  );
}

export default ProductsCardui
