import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'

const Home = lazy(() => import('./pages/Home'))
const Library = lazy(() => import('./pages/Library'))
const RaagaDetail = lazy(() => import('./pages/RaagaDetail'))
const Contribute = lazy(() => import('./pages/Contribute'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Compare = lazy(() => import('./pages/Compare'))
const Favorites = lazy(() => import('./pages/Favorites'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <span className="material-symbols-outlined text-4xl text-primary animate-spin" style={{ animationDuration: '1.5s' }}>
        autorenew
      </span>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col pb-24 md:pb-0 pt-16 md:pt-0">
        <Header />
        <Analytics />
        <main className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/raaga/:id" element={<RaagaDetail />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
