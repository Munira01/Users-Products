import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Components/Home/home';
import ProductDetail from './Components/ProductDetail/ProductDetail'

function App() {

  const clientQuery = new QueryClient();

  return (
    <QueryClientProvider client={clientQuery}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user/:id' element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App
