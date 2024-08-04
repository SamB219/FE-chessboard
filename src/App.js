import React from 'react';
import NavBar from './components/navBar.jsx';
import ChessBoard from './components/chessBoard.jsx';
import '../src/styles/App.css';
import "../src/styles/navBar.css";
import "../src/styles/chessBoard.css";



function App() {
  return (
    <div className="App">
      <NavBar />
      <ChessBoard />
    </div>
  );
}

export default App;