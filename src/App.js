import React, { useState } from 'react';
import './App.css';
import AddItems from './component/AddItems';
import ListItems from './component/ListItems';

function App() {
  const [list,setList]=useState(["item1","item2"])

  const additem = (item)=>{
    setList([item,...list]);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
    <AddItems additem={additem} />
    <ListItems list={list} />
          
    </div>
  );
}

export default App;
