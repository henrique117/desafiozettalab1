import { PageLayout } from '../../components/layout/layout.export'
import { Link, useSearchParams } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { useEffect, useState } from 'react'
import { CustomLoading } from '../../components/ui/ui.export'
import { getAllPokemonsByGen } from '../../services/pokemonServices'
import type { PokemonCardProps } from '../../types/pokemon.types'

const Pokemons: React.FC = () => {

    const [pokemons, setPokemons] = useState<PokemonCardProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const [searchParams] = useSearchParams()

    const param = searchParams.get('gen')

    const genId: number = param ? parseInt(param) : 1

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                setLoading(true)
                setError(null)
        
                const data = await getAllPokemonsByGen(genId)
                
                setPokemons(data)

            } catch (err) {
                setError('Houve uma falha ao buscar os pokemons.')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadPokemons()

    }, [genId])

    if (loading) {
        return (
            <PageLayout>
                <div className="container mt-4">
                    <CustomLoading text='Carregando Pokemons' />
                </div>
            </PageLayout>
        )
    }

    if (error) {
        return (
            <PageLayout>
                <div className="container mt-4">
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                </div>
            </PageLayout>
        )
    }
    
    return (
        <PageLayout>
            <div className="container mt-4">
                <div className="dropdown mb-4">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Generations
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to={`/pokemons?gen=1`} className="dropdown-item">Geração 1</Link></li>
                        <li><Link to={`/pokemons?gen=2`} className="dropdown-item">Geração 2</Link></li>
                        <li><Link to={`/pokemons?gen=3`} className="dropdown-item">Geração 3</Link></li>
                        <li><Link to={`/pokemons?gen=4`} className="dropdown-item">Geração 4</Link></li>
                        <li><Link to={`/pokemons?gen=5`} className="dropdown-item">Geração 5</Link></li>
                        <li><Link to={`/pokemons?gen=6`} className="dropdown-item">Geração 6</Link></li>
                        <li><Link to={`/pokemons?gen=7`} className="dropdown-item">Geração 7</Link></li>
                        <li><Link to={`/pokemons?gen=8`} className="dropdown-item">Geração 8</Link></li>
                        <li><Link to={`/pokemons?gen=9`} className="dropdown-item">Geração 9</Link></li>
                    </ul>
                </div>
                <h1 className="text-light text-center mb-4">Geração {genId}</h1>
                <div className="row g-3">
                    {pokemons.map((pokemon) => {
                        if(pokemon) {
                            return (
                                <div className="col-12 col-md-6 col-lg-3" key={pokemon.name}>
                                    <PokemonCard id={pokemon.id} name={pokemon.name} imageUrl={pokemon.imageUrl} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </PageLayout>
    )
}

export default Pokemons