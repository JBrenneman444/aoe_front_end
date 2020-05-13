import React from 'react'
import Form from './Form.js'

function Add(props) {
    return (
      <div className="add-civ">
        <h3>Add a Civilization</h3>
        <Form handleSubmit={props.handleSubmit}/>
        <p className="credits">Information collected from <a target="_blank" rel="noopener noreferrer" href="https://ageofempires.fandom.com/wiki/Category:Civilizations_(Age_of_Empires_II)">Fandom.com</a></p>
      </div>
    )
}

export default Add

// THIS is the NEWEST VERSION