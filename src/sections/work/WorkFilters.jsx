export default function WorkFilters({ categories, activeCategory, onSelect }) {
  return (
    <div className="work-filters reveal-element" style={{ transitionDelay: '0.15s' }}>
      <div className="work-filters-scroll">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
