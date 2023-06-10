import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/footer';
// import Cart from './Cart';
// import Register from './Register';

const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>

      <Route exact path="/" element={<Products/>}></Route>
      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
