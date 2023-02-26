
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
        <ItemListContainer greeting="Hola como esta" />
      
    </div>
  );
}

export default App;
