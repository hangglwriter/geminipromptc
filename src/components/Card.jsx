import './Card.css'

export default function Card({ prompt, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-image-wrapper">
                <img src={prompt.image} alt={prompt.title} className="card-image" loading="lazy" />
                <div className="card-overlay">
                    <span className="card-category">{prompt.category}</span>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{prompt.title}</h3>
            </div>
        </div>
    )
}
