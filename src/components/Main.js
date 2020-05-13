import React from 'react'
import Civilizations from './Civilizations.js'

function Main(props) {
    const { civilizations, handleDelete, handleUpdate } = props
      return (
        <main>
          <div className="filler"></div>
          <Civilizations
            civilizations={civilizations}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
          <div className="filler"></div>
        </main>
      )
  }
  
  export default Main
