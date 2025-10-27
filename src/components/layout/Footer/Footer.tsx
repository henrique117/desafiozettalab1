import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="py-3 text-light" style={{ backgroundColor: "#202124" }}>
            <div className="container">
                <p className="text-center text-secondary mb-0">
                    &copy; {new Date().getFullYear()} Desafio Zettalab. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer