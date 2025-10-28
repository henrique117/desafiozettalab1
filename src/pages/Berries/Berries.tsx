import { PageLayout } from '../../components/layout/layout.export'
import BerryCard from './BerryCard'

const berriesData = [
    { id: 1, name: 'cheri', firmness: 'soft', size: 20, growth_time: 3, max_harvest: 5 },
    { id: 2, name: 'chesto', firmness: 'super-hard', size: 80, growth_time: 3, max_harvest: 5 },
    { id: 3, name: 'pecha', firmness: 'very-soft', size: 40, growth_time: 3, max_harvest: 5 },
    { id: 4, name: 'rawst', firmness: 'hard', size: 32, growth_time: 3, max_harvest: 5 },
    { id: 5, name: 'aspear', firmness: 'super-hard', size: 50, growth_time: 3, max_harvest: 5 },
    { id: 6, name: 'leppa', firmness: 'very-hard', size: 28, growth_time: 4, max_harvest: 5 },
]

berriesData.sort((a, b) => a.name.localeCompare(b.name))

const Berries: React.FC = () => {
    return (
        <PageLayout>
            <div className="container mt-4">
                <h1 className="fs-1 text-light mb-4 text-center">Berries</h1>
                <div className="row g-3">
                    {berriesData.map((berry) => (
                        <BerryCard
                            id={berry.id}
                            name={berry.name}
                            firmness={berry.firmness}
                            size={berry.size}
                            growth_time={berry.growth_time}
                            max_harvest={berry.max_harvest}
                        />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Berries