import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
      </div>
    )
  });
  return (
    <div className="ninjaList">
      {ninjaList}
    </div>
  )
}

export default Ninjas