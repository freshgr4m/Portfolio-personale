import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import { LoadedProvider, useLoaded } from './context/LoadedContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import ProjectsList from './pages/ProjectsList'
import ProjectDetail from './pages/ProjectDetail'
import Journal from './pages/Journal'
import JournalPost from './pages/JournalPost'
import NotFound from './pages/NotFound'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function AppInner() {
  const { setLoaded } = useLoaded()
  useSmoothScroll()
  return (
    <>
      <Cursor />
      <Loader onComplete={() => setLoaded(true)} />
      <ScrollToTop />
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <LoadedProvider>
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </LoadedProvider>
    </LangProvider>
  )
}
