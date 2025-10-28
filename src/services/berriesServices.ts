import type { BerryCardProps } from '../types/berry.types'
import apiClient from './api'

export const getBerryDetails = async (name: string): Promise<BerryCardProps> => {
    try {
        const response = await apiClient.get(`/berry/${name}`)
        const data = response.data
        
        const builtReturn: BerryCardProps = {
            id: data.id,
            name: data.name,
            firmness: data.firmness.name,
            size: data.size,
            growth_time: data.growth_time,
            max_harvest: data.max_harvest
        }

        return builtReturn
    } catch (error) {
        console.error('Erro ao buscar detalhes da Berry:', error)
        throw error
    }
}

export const getAllBerries = async (): Promise<BerryCardProps[]> => {
    try {
        const response = await apiClient.get(`/berry/?offset=0&limit=64`)
        const results: { name: string, url: string }[] = response.data.results

        const berryPromises: Promise<BerryCardProps>[] = results.map(berry => {
            return getBerryDetails(berry.name)
        })

        return Promise.all(berryPromises)
    } catch (error) {
        console.error('Erro ao buscar Berries:', error)
        throw error
    }
}