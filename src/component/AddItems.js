import React, { useState } from 'react'

const AddItems = ({additem}) => {
  const [item,setItem]= useState("")
  const handelechange = (event)=> {
  setItem(event.target.value);
  };
  return (
    <div>
      <input placeholder='Add todo...' onChange={handelechange}value={item}/>
      <button onClick={(e) => {e.preventDefault};
     additem(item);
     setItem   
    }>Add</button> 
     
    </div>
  )
}

export default AddItems
