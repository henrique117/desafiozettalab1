import { useEffect, useState } from 'react'
import { PageLayout } from '../../components/layout/layout.export'
import type { BerryCardProps } from '../../types/berry.types'
import BerryCard from './BerryCard'
import { getAllBerries } from '../../services/berriesServices'
import { CustomLoading } from '../../components/ui/ui.export'

const Berries: React.FC = () => {
    const [berries, setBerries] = useState<BerryCardProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadBerries = async () => {
            try {
                setLoading(true)
                setError(null)
        
                const data = await getAllBerries()

                data.sort((a, b) => a.name.localeCompare(b.name))
                
                setBerries(data)

            } catch (err) {
                setError('Houve uma falha ao buscar as berries.')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadBerries()

    }, [])

    if (loading) {
        return (
            <PageLayout>
                <div className="container mt-4">
                    <CustomLoading text='Carregando Berries' />
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
                <h1 className="fs-1 text-light mb-4 text-center">Berries</h1>
                <div className="row g-3">
                    {berries.map((berry) => (
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