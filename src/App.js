import React from 'react';
import './App.css';
import Canvas from './components/Canvas'

function App() {
  return (
      <div className='main'>
        <header>
          <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        </header>
        <Canvas/>
      </div>
  );
}

export default App;
