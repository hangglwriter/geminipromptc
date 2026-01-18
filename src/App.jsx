import { useState, useMemo } from 'react'
import Card from './components/Card'
import Modal from './components/Modal'
import FilterBar from './components/FilterBar'
import promptsData from './data/prompts.json'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrompt, setSelectedPrompt] = useState(null)

  // Extract unique categories
  const categories = useMemo(() => {
    return [...new Set(promptsData.map(p => p.category))]
  }, [])

  // Filter prompts
  const filteredPrompts = useMemo(() => {
    if (selectedCategory === 'All') return promptsData
    return promptsData.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="app-container">
      <header>
        <h1>Gemini Prompt Gallery</h1>
        <p>Unlock Your Productivity with Enterprise-Grade Prompts</p>
      </header>

      <main>
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="card-grid">
          {filteredPrompts.map(prompt => (
            <Card
              key={prompt.id}
              prompt={prompt}
              onClick={() => setSelectedPrompt(prompt)}
            />
          ))}
        </div>
      </main>

      {selectedPrompt && (
        <Modal
          prompt={selectedPrompt}
          onClose={() => setSelectedPrompt(null)}
        />
      )}
    </div>
  )
}

export default App
