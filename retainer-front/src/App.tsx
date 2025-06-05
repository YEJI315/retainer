import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestConnection from './components/TestConnection.tsx';

function App() {
  return (
    <div className="App">
      <TestConnection />
    </div>
  );
}

export default App
