import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuDetails from './pages/MenuDetails';
import Stats from './pages/Stats';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/saveur/:type" element={<Home />}/>
          <Route path="/special/:filtre" element={<Home />}/>
          <Route path="/menu/:id" element={<MenuDetails />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;