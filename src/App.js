
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/ProductCard/ProductCard';
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

const onAdd = ( cantidad )=>{
   console.log(`sea grego al carrito ${cantidad} elementos`)
}

  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      {/* <ProductCard title="Queso Chanco" price={5600}/> */}      
{ /*     <ItemCount stock={5} initial={1} onAdd={onAdd}/>*/}
      <Footer/>
    </div>
  );
}

export default App;
