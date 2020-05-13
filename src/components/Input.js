import React from 'react'

const Input = props => {
  const {
    handleChange,
    name,
    placeholder,
    civ_name,
    type,
    value
    } = props
    return (
      <>
        <label htmlFor={name}>{civ_name}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input
