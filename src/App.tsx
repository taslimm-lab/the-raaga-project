import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Library from './pages/Library'
import RaagaDetail from './pages/RaagaDetail'
import Contribute from './pages/Contribute'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col pb-24 md:pb-0 pt-16 md:pt-0">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/raaga/:id" element={<RaagaDetail />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
