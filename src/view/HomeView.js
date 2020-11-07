import React, { useState } from 'react'
/*import Axios from 'axios'*/
import PokemonService from '../shared/api/service/PokemonService'


export const HomeView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState()

    const fetchDataFromExternalAPI = () =>{
        PokemonService.searchForPokemon(search.toLowerCase())
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))
        
        /*Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))*/
    }
    
    const displayData = () => {
        if(data) {
            return <div>
                <h3>name: {data.name}</h3>
                <h3>id: {data.id}</h3>
                <h3>weight: {data.weight}</h3>
                <h3>height: {data.height}</h3>
                <h3>type: {data.types[0].type.name}</h3>
            </div>
        }
    }

    return (
        <div>
        <span>Search for a pokemon </span>
        <input onChange={(event) => setSearch(event.target.value)}/><br />
            <button onClick={() => fetchDataFromExternalAPI()}>Make API Call</button>
            {displayData()}
            {/*<button onClick={() => console.log(data)}>Show State</button>*/}

            <p>Home Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  
        </div>
    )
}