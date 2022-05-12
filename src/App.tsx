import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useWeb3Context } from './hooks/useWeb3Context';
import Wallet from './components/Wallet';
import Redeem from "./components/Redeem";
import Explain from "./components/Explain"
import { Link } from 'react-router-dom';

function App() {
  const {connected, address} = useWeb3Context();
  return (
    <div className="App">
        <Wallet />
        <h1>Tears of Luna</h1>
        <Redeem />
        <Explain />
    </div>
  );
}

export default App;
