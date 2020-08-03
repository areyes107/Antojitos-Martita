import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">

    <Navbar/>
    <Footer/>

    </div>
  );
}

export default App;
