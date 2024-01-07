import './App.css';
import Header from './components/Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import React, { useState } from 'react';

function App() {
  const [ data , setsendData] = useState([])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setsendData={setsendData} data={data} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<Projects item={data}  />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
