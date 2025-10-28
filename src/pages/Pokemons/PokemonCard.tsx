import { Link } from 'react-router-dom'
import style from './PokemonCard.module.css'
import type { PokemonCardProps } from '../../types/pokemon.types'

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
    return (
        <Link to={`/pokemons/${name}`} style={{ textDecoration: 'none' }}>
            <div className={`card text-bg-dark h-100 ${style.card}`}>
                {imageUrl && (
                    <img 
                        src={imageUrl}
                        className="card-img-top p-3" 
                        alt={name} 
                        style={{ height: '200px', objectFit: 'contain' }}
                    />
                )}
                <div className="card-body text-center">
                    <h5 className="card-title">{capitalize(name)}</h5>
                    <span className="badge text-bg-light">#{id}</span>
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard;