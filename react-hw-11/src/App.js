import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
