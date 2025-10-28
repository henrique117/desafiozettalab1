import type { PokemonCardProps, PokemonDetailsProps, PokemonStatsProps, PokemonTypeProps } from '../types/pokemon.types'
import apiClient from './api'

export const getPokemonDetails = async (name: string): Promise<PokemonDetailsProps> => {
    try {
        const response = await apiClient.get(`/pokemon/${name}`)
        const data = response.data

        const typesString: string[] = data.types.map((type: { slot: number, type: { name: string, url: string } }) => type.type.name)
        const types: PokemonTypeProps[] = []

        for (const type of typesString) {
            switch (type) {
                case 'normal':
                    types.push({ name: type, color: '#A8A878', textColor: '#FFF' })
                    break
                case 'fire':
                    types.push({ name: type, color: '#F08030', textColor: '#FFF' })
                    break
                case 'water':
                    types.push({ name: type, color: '#6890F0', textColor: '#FFF' })
                    break
                case 'electric':
                    types.push({ name: type, color: '#F8D030', textColor: '#000' })
                    break
                case 'grass':
                    types.push({ name: type, color: '#78C850', textColor: '#000' })
                    break
                case 'ice':
                    types.push({ name: type, color: '#98D8D8', textColor: '#000' })
                    break
                case 'fighting':
                    types.push({ name: type, color: '#C03028', textColor: '#FFF' })
                    break
                case 'poison':
                    types.push({ name: type, color: '#A040A0', textColor: '#FFF' })
                    break
                case 'ground':
                    types.push({ name: type, color: '#E0C068', textColor: '#000' })
                    break
                case 'flying':
                    types.push({ name: type, color: '#A890F0', textColor: '#FFF' })
                    break
                case 'psychic':
                    types.push({ name: type, color: '#F85888', textColor: '#FFF' })
                    break
                case 'bug':
                    types.push({ name: type, color: '#A8B820', textColor: '#FFF' })
                    break
                case 'rock':
                    types.push({ name: type, color: '#B8A038', textColor: '#FFF' })
                    break
                case 'ghost':
                    types.push({ name: type, color: '#705898', textColor: '#FFF' })
                    break
                case 'dragon':
                    types.push({ name: type, color: '#7038F8', textColor: '#FFF' })
                    break
                case 'dark':
                    types.push({ name: type, color: '#705848', textColor: '#FFF' })
                    break
                case 'steel':
                    types.push({ name: type, color: '#B8B8D0', textColor: '#000' })
                    break
                case 'fairy':
                    types.push({ name: type, color: '#EE99AC', textColor: '#000' })
                    break
                default:
                    types.push({ name: type, color: '#68A090', textColor: '#FFF' })
                    break
            }
        }

        const stats: PokemonStatsProps[] = data.stats.map((stat: { base_stat: number, effort: number, stat: { name: string, url: string } }) => { stat.base_stat, stat.stat.name })

        const builtReturn: PokemonDetailsProps = {
            id: data.id,
            name: data.name,
            imageUrl: data.sprites.other['official-artwork'].front_default,
            height: data.height,
            weight: data.weight,
            types: types,
            stats: stats
        }

        return builtReturn
    } catch (error) {
        console.error('Erro ao buscar detalhes do Pokemon:', error)
        throw error
    }
}

export const getAllPokemonsByGen = async (id: number): Promise<PokemonCardProps[]> => {
    try {
        const response = await apiClient.get(`/generation/${id}`)
        const results = response.data.pokemon_species

        const pokemonPromises: Promise<PokemonCardProps>[] = results.map(async (pokemon: { name: string, url: string }) => {
            const response = await apiClient.get(`/pokemon/${pokemon.name}`)
            const data = response.data

            return {
                id: data.id,
                name: data.name,
                imageUrl: data.sprites.other['official-artwork'].front_default
            }
        })

        return Promise.all(pokemonPromises)
    } catch (error) {
        console.error('Erro ao buscar Pokemons:', error)
        throw error
    }
}