import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Suspense} from 'react'
//import LazyLoading from './LazyLoading';
const Lazy = React.lazy(()=>import('./LazyLoading'))

function App() {
  return (
    <div className="App">
      <h1>Lazy loading Sample</h1>
      <Suspense fallback={<div>Loading .....</div>}><Lazy/></Suspense>

      
    </div>
  );
}

export default App;
