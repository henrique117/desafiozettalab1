interface LoadingProps {
    text: string
}

const Loading: React.FC<LoadingProps> = ({ text }) => (
    <div className="text-center text-light">
        <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
        </div>
        <p className="fs-3 mt-2">{text}</p>
    </div>
)

export default Loading