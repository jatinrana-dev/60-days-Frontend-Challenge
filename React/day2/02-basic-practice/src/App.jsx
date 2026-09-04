import React from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import Greeting from '../components/exp-practice'
import ProductInfo from '../components/ProductInfo'

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Greeting></Greeting>
      <ProductInfo></ProductInfo>
    </div>
  )
}

export default App
