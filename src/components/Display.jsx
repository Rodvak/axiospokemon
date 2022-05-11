import React from 'react'

const Display = (props) => {
    
    const {pokemons} = props

  return (
      
    <div className='container bg-light border border-dark border border-5 mt-5'>

    {
        pokemons.map((pokemon, i) => {
            return (


                <p className='fw-bold m-4' key={i}>
                    {pokemon.name}
                {/* <img src={pokemon.sprites.front_default} /> */}
                </p>
            )
        })
    }
    </div>

  )
}

export default Display