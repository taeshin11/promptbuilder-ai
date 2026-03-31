import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { LanguageProvider } from './i18n/LanguageContext'
import Layout from './components/Layout'
import App from './App.jsx'
import AboutPage from './pages/AboutPage'
import HowToUsePage from './pages/HowToUsePage'
import PromptGalleryPage from './pages/PromptGalleryPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function LocalizedLayout() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* English (default, no prefix) */}
          <Route element={<LocalizedLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-to-use" element={<HowToUsePage />} />
            <Route path="/gallery" element={<PromptGalleryPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Route>

          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LocalizedLayout />}>
            <Route index element={<App />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="how-to-use" element={<HowToUsePage />} />
            <Route path="gallery" element={<PromptGalleryPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
