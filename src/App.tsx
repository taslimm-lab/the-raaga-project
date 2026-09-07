import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Library from './pages/Library'
import RaagaDetail from './pages/RaagaDetail'
import Contribute from './pages/Contribute'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col pb-24 md:pb-0 pt-16 md:pt-0">
        <Header />
        <main className="flex-1">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/raaga/:id" element={<RaagaDetail />} />
              <Route path="/contribute" element={<Contribute />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
