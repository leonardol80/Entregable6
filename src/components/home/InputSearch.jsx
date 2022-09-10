import React from 'react'

const InputSearch = ({setInputSearch}) => {

    //Captura el input caracter x caracter console.log(e.target.value)
    const handleChange = (e) => {
        setInputSearch(e.target.value.trim());
    }

  return (
    <div>
        <input onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch