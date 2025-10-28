import React from 'react'
import { PageLayout } from '../../components/layout/layout.export'
import { CustomButton } from '../../components/ui/ui.export'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <PageLayout>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-light" style={{ fontSize: '78px' }} ><strong>BEM-VINDOS</strong></h1>
                        <h1 className="fs-1 text-light" style={{ paddingBottom: '4rem' }} >À EXPERIÊNCIA POKEMON!</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Link to='/pokemons' style={{ textDecoration: 'none' }}>
                                <CustomButton text='Pokemons' />
                            </Link>
                            <Link to='/berries' style={{ textDecoration: 'none' }}>
                                <CustomButton text='Berries' color='#27ca55ff' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <h3 className="fs-3 text-light" style={{ paddingTop: '4rem' }} >Consulte alguns dados sobre Pokemons e Berries!</h3>
                </div>
                <div className="row justify-content-center mt-4" style={{ maxWidth: '700px' }} >
                    <div className="col-12 col-md-6 text-center">
                        <img
                            src="/assets/piplup.png"
                            alt="Piplup"
                            className="img-fluid"
                            style={{ height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Home