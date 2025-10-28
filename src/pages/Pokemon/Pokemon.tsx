import React from 'react'
import { PageLayout } from '../../components/layout/layout.export'
import { Link } from 'react-router-dom'

const Pokemon: React.FC = () => {

    const pokemon = {
        id: 25,
        name: "Pikachu",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        height: 4,
        weight: 60,
        types: [
            { name: "electric", color: "#F8D030", textColor: "#000" }
        ],
        stats: [
            { name: "HP", value: 35 },
            { name: "Attack", value: 55 },
            { name: "Defense", value: 40 },
            { name: "Sp. Atk", value: 50 },
            { name: "Sp. Def", value: 50 },
            { name: "Speed", value: 90 },
        ]
    }

    const getStatPercent = (value: number, max: number) => (value / max) * 100;

    return (
        <PageLayout>
            <div className="container mt-5 mb-5">
                <div className="row mb-3">
                    <div className="col-12">
                        <Link to="/pokemons?gen=1" className="btn btn-dark">
                            Voltar para a Lista
                        </Link>
                    </div>
                </div>
                <div className="card text-bg-dark border-secondary">
                    <div className="card-header text-center">
                        <h1 className="card-title display-4 text-capitalize">
                            {pokemon.name}
                            <span className="text-secondary ms-3">#{pokemon.id}</span>
                        </h1>
                    </div>
                    
                    <div className="card-body">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-5 text-center">
                                <img 
                                    src={pokemon.imageUrl} 
                                    alt={pokemon.name} 
                                    className="img-fluid" 
                                    style={{ maxHeight: '400px' }}
                                />
                            </div>
                            <div className="col-md-7">
                                <h2 className="fs-4">Tipos</h2>
                                <div className="mb-3">
                                    {pokemon.types.map(type => (
                                        <span 
                                            key={type.name} 
                                            className="badge me-2 fs-6 text-capitalize" 
                                            style={{ backgroundColor: type.color, color: type.textColor }}
                                        >
                                            {type.name}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="fs-4 mt-4">Informações Físicas</h2>
                                <div className="row text-center mb-3">
                                    <div className="col-6">
                                        <div className="card text-bg-secondary">
                                            <div className="card-body">
                                                <h5 className="card-title">Altura</h5>
                                                <p className="card-text fs-4 mb-0">{pokemon.height / 10} m</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card text-bg-secondary">
                                            <div className="card-body">
                                                <h5 className="card-title">Peso</h5>
                                                <p className="card-text fs-4 mb-0">{pokemon.weight / 10} kg</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="fs-4 mt-4">Atributos Base</h2>
                                <ul className="list-group list-group-flush">
                                    {pokemon.stats.map(stat => (
                                        <li key={stat.name} className="list-group-item bg-transparent text-light px-0">
                                            <div className="row">
                                                <div className="col-3"><strong>{stat.name}</strong></div>
                                                <div className="col-2 text-end"><strong>{stat.value}</strong></div>
                                                <div className="col-7 d-flex align-items-center">
                                                    <div className="progress w-100" role="progressbar" aria-valuenow={stat.value} aria-valuemin={0} aria-valuemax={255}>
                                                        <div 
                                                            className="progress-bar" 
                                                            style={{ width: `${getStatPercent(stat.value, 255)}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Pokemon