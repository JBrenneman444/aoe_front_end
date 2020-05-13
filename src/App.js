import React from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { aoeLogoTribute } from './images';
import './App.scss';

class App extends React.Component {
state = {
  civilizations: []
}

  handleAdd = (event, formInputs) => {
    event.preventDefault()
    // console.log(formInputs)
    fetch('/civilizations', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
  })
  .then(createdCiv => createdCiv.json())
  .then(jsonedCiv => {
    this.setState({
      civilizations: [jsonedCiv, ...this.state.civilizations]
    })
  })
  .catch(error => console.log(error))
 }

 handleDelete = (deletedCivilization) => {
  fetch(`http://localhost:3000/civilizations/${deletedCivilization.id}`, {
    method: "DELETE",
    headers: {
      'Accept': "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((json) => {
      const civilizations = this.state.civilizations.filter(
        (civilization) => civilization.id !== deletedCivilization.id
      );
      this.setState({ civilizations });
    })
    .catch((error) => console.log(error));
};

handleUpdate = (event, formInputs) => {
  event.preventDefault();
  console.log("in it to win it");
  fetch(`http://localhost:3000/civilizations/${formInputs.id}`, {
    body: JSON.stringify(formInputs),
    method: "PUT",
    headers: {
      'Accept': "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((updatedCivilization) => {
      // go wild
      this.getCivilizations();
    })
    .catch((error) => console.log(error));
};

  componentDidMount() {
    this.getCivilizations()
  }
  getCivilizations () {
    fetch('http://localhost:3000/civilizations')
      .then(response => response.json())
      .then(json => this.setState({civilizations: json}))
      .catch(error => console.error(error))
  }

  render () {
    return (
      <div className="App">
        <div className="container">
        
          <img id="aoeLogo" alt="Age of Empires" width="50%" src={ aoeLogoTribute }></img>
          {/* <img id="aoeLogo" alt="Age of Empires" width="50%" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.ageofempires.com%2Faoe-e3%2Fwp-content%2Fthemes%2Fmsgpwebteam%2Fdist%2Fimages%2Fage1-footer-logo_fecedc4d.png&f=1&nofb=1"></img> */}
          {/* <h3 id="tribute">a tribute</h3> */}
            <Navbar civilizations={this.state.civilizations} />
            <Main 
              civilizations={this.state.civilizations}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
            <Add handleSubmit={this.handleAdd}/>

        </div>
      </div>
    );
  }                                           
}

// THIS is the NEWEST VERSION

export default App;
