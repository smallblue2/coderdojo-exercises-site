import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import VariablesPage from './pages/VariablesPage'
import ConditionsPage from './pages/ConditionsPage'
import StringsPage from './pages/StringsPage'
import GamesPage from './pages/GamesPage'
import LoopsPage from './pages/LoopsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/variables" element={<VariablesPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/strings" element={<StringsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/loops" element={<LoopsPage />} />
      </Routes>
    </Router>
  )
}

export default App
