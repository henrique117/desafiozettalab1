import { Footer, NavBar } from '../layout.export'

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <main className="flex-grow-1" style={{ paddingTop: '5rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout