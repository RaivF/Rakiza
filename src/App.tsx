import { Routes, Route } from "react-router-dom"

import MainLayout from "@/layouts/MainLayout"
import HomePage from "@/pages/HomePage"
import CatalogPage from "@/pages/CatalogPage"
import CategoryPage from "@/pages/CategoryPage"
import ProductPage from "@/pages/ProductPage"
import ManufacturingPage from "@/pages/ManufacturingPage"
import MaterialsPage from "@/pages/MaterialsPage"
import PartnersPage from "@/pages/PartnersPage"
import AboutPage from "@/pages/AboutPage"
import CollectionsPage from "@/pages/CollectionsPage"
import ContactsPage from "@/pages/ContactsPage"
import PrivacyPage from "@/pages/PrivacyPage"
import TermsPage from "@/pages/TermsPage"
import NotFoundPage from "@/pages/NotFoundPage"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:type" element={<CategoryPage />} />
        <Route path="/catalog/:type/:slug" element={<ProductPage />} />
        <Route path="/manufacturing" element={<ManufacturingPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
