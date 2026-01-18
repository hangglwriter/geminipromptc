export default function FilterBar({ categories, selectedCategory, onSelect }) {
    // Using inline styles for simplicity as this is a small component, 
    // but could be moved to CSS if complex hover states needed.

    const btnStyle = (isActive) => ({
        padding: '8px 20px',
        borderRadius: '24px',
        border: '1px solid',
        borderColor: isActive ? 'var(--primary-color)' : 'var(--border-color)',
        backgroundColor: isActive ? 'var(--primary-color)' : 'var(--bg-card)',
        color: isActive ? '#fff' : 'var(--text-muted)',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        outline: 'none',
    });

    return (
        <div className="filter-bar" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button
                style={btnStyle(selectedCategory === 'All')}
                onClick={() => onSelect('All')}
            >
                All
            </button>
            {categories.map(cat => (
                <button
                    key={cat}
                    style={btnStyle(selectedCategory === cat)}
                    onClick={() => onSelect(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}
