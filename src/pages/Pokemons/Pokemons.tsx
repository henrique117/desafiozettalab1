import React from 'react'
import { PageLayout } from '../../components/layout/layout.export'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'

const generationNames = [
    {id: 1, name: "Gen 1"},
    {id: 2, name: "Gen 2"}
]

const pokemons = [
    {name: 'ditto', id: 132, imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'}
]

const Pokemons: React.FC = () => {
    return (
        <PageLayout>
            <div className="container mt-4">
                <div className="dropdown mb-4">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Generations
                    </button>
                    <ul className="dropdown-menu">
                        {generationNames.map((gen) => (
                            <li key={gen.id}>
                                <Link to={`/pokemons?gen=${gen.id}`} className="dropdown-item">{gen.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <h1 className="text-light text-center mb-4">Gen 1</h1>
                <div className="row g-3">
                    {pokemons.map((pokemon) => (
                        <div className="col-12 col-md-6 col-lg-3" key={pokemon.name}>
                            <PokemonCard id={pokemon.id} name={pokemon.name} imageUrl={pokemon.imageUrl} />
                        </div>
                    ))}
                </div>

            </div>
        </PageLayout>
    )
}

export default Pokemons