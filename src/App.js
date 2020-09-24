import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';

function App() {
  return (
    <div className="">
      <Header></Header>
      <CreateNote></CreateNote>
    </div>
  );
}

export default App;
