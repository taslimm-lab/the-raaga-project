import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'

const Home = lazy(() => import('./pages/Home'))
const Library = lazy(() => import('./pages/Library'))
const RaagaDetail = lazy(() => import('./pages/RaagaDetail'))
const Contribute = lazy(() => import('./pages/Contribute'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Compare = lazy(() => import('./pages/Compare'))
const Favorites = lazy(() => import('./pages/Favorites'))
const ThaatExplorer = lazy(() => import('./pages/ThaatExplorer'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Timeline = lazy(() => import('./pages/Timeline'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-2xl border border-outline-variant p-4 space-y-2 animate-pulse">
          <div className="h-3 w-16 bg-surface-container-high rounded" />
          <div className="h-5 w-40 bg-surface-container-high rounded" />
          <div className="h-3 w-28 bg-surface-container-high rounded" />
        </div>
      ))}
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
                <Route path="/thaats" element={<ThaatExplorer />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <BottomNav />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
