import React from 'react'

function Navbar(props) {
const { civilizations } = props
    return (
        <div className="civ-links">
            <h3>List of Civilizations</h3>
            <div className="all-the-civs">
                {civilizations.map(civilization =>
                    <p className="civ-link" key={civilization.id}>
                        <a href={'#' + civilization.civ_name}>
                            {civilization.civ_name}
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}

  export default Navbar
