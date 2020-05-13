import React from 'react'
import Civilization from './Civilization.js'

function Civilizations(props) {
  const { handleUpdate, civilizations, handleDelete } = props
    return (
      <div>
        {civilizations.map(civilization =>
          <Civilization 
            key={civilization.id} 
            civilization={civilization}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        />)}
      </div>
    )
}

export default Civilizations
