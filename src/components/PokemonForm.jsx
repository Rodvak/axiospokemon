import React from 'react'


const PokemonForm = (props) => {

    const {fetchWithAxios} = props

    const handleInput = () => {
        fetchWithAxios()
    }
  return (
      
    <div className='container mt-5 font-monospace'>
        <button className='btn btn-warning fw-bolder' onClick={handleInput}>Fetch Pokemon</button>
    </div>
    
  )
}

export default PokemonForm