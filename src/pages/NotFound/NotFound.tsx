import React from 'react'

const NotFound: React.FC = () => {
    return (
        <div className="d-flex flex-column h-100 justify-content-center">
            <h1 className="text-center text-light" style={{ fontSize: '128px' }}>404</h1>
            <h2 className="text-center text-light-emphasis">Page not found</h2>
        </div>
    )
}

export default NotFound