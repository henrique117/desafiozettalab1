export interface PokemonCardProps {
    id: number
    name: string
    imageUrl: string
}

export interface PokemonDetailsProps {
    id: number
    name: string
    imageUrl: string
    height: number
    weight: number
    types: PokemonTypeProps[]
    stats: PokemonStatsProps[]
}

interface PokemonTypeProps {
    name: string
    color: string
    textColor: string
}

interface PokemonStatsProps {
    name: string
    baseValue: number
}