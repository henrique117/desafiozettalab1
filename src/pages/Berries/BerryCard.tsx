import React from 'react'
import type { BerryCardProps } from '../../types/berry.types'

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const BerryCard: React.FC<BerryCardProps> = ({ id, name, firmness, size, growth_time, max_harvest }) => {
    const collapseId = `berry-collapse-${id}`;

    return (
        <div>
            <button
                className="btn btn-dark w-100 d-flex justify-content-between border border-secondary collapsed" 
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
            >
                <strong>{capitalize(name)}</strong>
                <span className="collapse-arrow">►</span>
            </button>
            <section className="collapse" id={collapseId}> 
                <div className="card card-body bg-transparent text-light mt-1">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                            <strong>ID:</strong> <span>{id}</span>
                        </li>
                        <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                            <strong>Firmness:</strong> <span>{capitalize(firmness)}</span>
                        </li>
                        <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                            <strong>Size:</strong> <span>{size / 10} cm</span>
                        </li>
                        <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                            <strong>Growth Time:</strong> <span>{growth_time}h</span>
                        </li>
                        <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                            <strong>Max Harvest:</strong> <span>{max_harvest}</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default BerryCard