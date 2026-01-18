import { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({ prompt, onClose }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Prevent scrolling behind modal
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'active';
        };
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt.prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>

                <div className="modal-layout">
                    <div className="modal-left">
                        <img src={prompt.image} alt={prompt.title} className="modal-image" />
                    </div>

                    <div className="modal-right">
                        <div className="modal-header">
                            <span className="modal-category">{prompt.category}</span>
                            <h2 className="modal-title">{prompt.title}</h2>
                            <p className="modal-desc">{prompt.description}</p>
                        </div>

                        <div className="prompt-section">
                            <div className="prompt-box">
                                <code>{prompt.prompt}</code>
                            </div>
                            <button
                                className={`copy-btn ${copied ? 'copied' : ''}`}
                                onClick={handleCopy}
                            >
                                {copied ? 'Copied!' : 'Copy Prompt'}
                            </button>
                        </div>

                        <div className="tips-section">
                            <h4>Tips</h4>
                            <p>Paste this prompt into Gemini. You can modify the bracketed parts to fit your specific needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
