import React from 'react'
import { Link } from 'react-router-dom';

interface PokemonCardProps {
    id: number
    name: string
    imageUrl: string
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
    return (
        <Link to={`/pokemons/${id}`} style={{ textDecoration: 'none' }}>
            <div className="card text-bg-dark h-100">
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