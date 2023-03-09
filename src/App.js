
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/ProductCard/ProductCard';
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div>
      <Navbar/>
      
      <ProductCard title="Queso Chanco" price={5600}/>
      <ItemCount/>
      <Footer/>
    </div>
  );
}

export default App;
