import React from 'react'

const ListItems = ({list}) => {
  return (
    <div>
      <h2> List of Items</h2>
      {list.map((item,i)=>(<ul><il>{item}<button>Delete</button> </il></ul>) )}
    </div>
  )
}

export default ListItems
