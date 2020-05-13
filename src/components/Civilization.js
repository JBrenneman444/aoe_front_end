import React from 'react'
import Form from './Form.js'

class Civilization extends React.Component {
  state = {
    formVisible: false
  }
  toggleForm = () => {
    this.setState({formVisible: !this.state.formVisible})
  }
  handleUpdate = (event, civilization) => {
    this.props.handleUpdate(event, civilization)
    this.toggleForm()
  }
  render () {
    const { civilization, handleDelete} = this.props
    return(
      <>
      {this.state.formVisible ? (
        <>
          <div className="civilization">
            {/* CIV NAME */}
            <h2 id={civilization.civ_name}>{ civilization.civ_name }</h2>

            <div className="flexbox">{/* BEGINNING of FLEXBOX div  */}
                {/* ARMY STYLES */}
                <div className="focus-div">
                  <h5 className="subheader">Strategic Focus:</h5>
                  { civilization.army_styles.map((army_style, index) =>
                        <div key={index}>
                          {army_style}
                        </div>
                  )}
                </div>

                {/* UNIQUE UNITS */}
                <div className="unique-div">
                  <h5 className="subheader">Unique Units:</h5>
                  { civilization.unique_units.map((unique_unit, index) =>
                        <div key={index}>
                          {unique_unit}
                        </div>  
                  )}
                </div>
            </div> {/* END of FLEX BOX div */}

            {/* BUTTONS */}
            <div className="the-buttons">
              <button className="delete-button" onClick={()=> handleDelete(civilization)}><strong>X</strong></button>
              <button onClick={this.toggleForm}>edit this entry</button>
            </div>

            <div className="civilization-form">
              <button className="cancel-button" onClick={this.toggleForm}>CANCEL</button>
              <Form 
                civilization={civilization} 
                handleSubmit={this.handleUpdate}
                toggleForm={this.toggleForm}
              />
            </div>
          </div>

        </>
        ) : (
          <div className="civilization">
            {/* CIV NAME */}
            <h2 id={civilization.civ_name}>{ civilization.civ_name }</h2>

            <div className="flexbox">{/* BEGINNING of FLEXBOX div  */}
                {/* ARMY STYLES */}
                <div className="focus-div">
                  <h5 className="subheader">Strategic Focus:</h5>
                  { civilization.army_styles.map((army_style, index) =>
                        <div key={index}>
                          {army_style}
                        </div>
                  )}
                </div>

                {/* UNIQUE UNITS */}
                <div className="unique-div">
                  <h5 className="subheader">Unique Units:</h5>
                  { civilization.unique_units.map((unique_unit, index) =>
                        <div key={index}>
                          {unique_unit}
                        </div>  
                  )}
                </div>
            </div> {/* END of FLEX BOX div */}

            {/* BUTTONS */}
            <div className="the-buttons">
              <button onClick={()=> handleDelete(civilization)}><strong>X</strong></button>
              <button onClick={this.toggleForm}>edit this entry</button>
            </div>
          </div>
        )}

      </>
    )
  }
}

export default Civilization


// THIS is the NEWEST VERSION