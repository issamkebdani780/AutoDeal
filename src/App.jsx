import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import VehiclesListPage from './pages/VehiclesListPage';
import AdvancedSearchPage from './pages/AdvancedSearchPage';
import FilteredResultsPage from './pages/FilteredResultsPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import VehicleDetailShowroom from './pages/VehicleDetailShowroom';
import VehicleDetailAdmin from './pages/VehicleDetailAdmin';
import ShowroomDetailPage from './pages/ShowroomDetailPage';
import ShowroomVehiclesPage from './pages/ShowroomVehiclesPage';
import ThankYouPage from './pages/ThankYouPage';
import ImportFrancePage from './pages/ImportFrancePage';
import ImportChinaPage from './pages/ImportChinaPage';
import CertifiedUsedPage from './pages/CertifiedUsedPage';
import ServicesPage from './pages/ServicesPage';
import EstimationPage from './pages/EstimationPage';
import SellVehiclePage from './pages/SellVehiclePage';
import FinancingPage from './pages/FinancingPage';
import CompareVehiclesPage from './pages/CompareVehiclesPage';
import FavoritesPage from './pages/FavoritesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          
          {/* Catalogue & Recherche */}
          <Route path="vehicules" element={<VehiclesListPage />} />
          <Route path="recherche-avancee" element={<AdvancedSearchPage />} />
          <Route path="resultats" element={<FilteredResultsPage />} />
          <Route path="vehicule/:id" element={<VehicleDetailPage />} />
          
          {/* Showrooms */}
          <Route path="showroom/gestion-vehicule/:id" element={<VehicleDetailShowroom />} />
          <Route path="showroom/:id" element={<ShowroomDetailPage />} />
          <Route path="showroom/:id/vehicules" element={<ShowroomVehiclesPage />} />

          {/* Admin */}
          <Route path="admin/vehicule/:id" element={<VehicleDetailAdmin />} />
          
          {/* Imports & Occasions */}
          <Route path="import-france" element={<ImportFrancePage />} />
          <Route path="import-chine" element={<ImportChinaPage />} />
          <Route path="occasions-certifiees" element={<CertifiedUsedPage />} />
          
          {/* Services & Estimation */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="estimation" element={<EstimationPage />} />
          <Route path="vendre" element={<SellVehiclePage />} />
          <Route path="financement" element={<FinancingPage />} />
          
          {/* Utilitaires */}
          <Route path="comparaison" element={<CompareVehiclesPage />} />
          <Route path="favoris" element={<FavoritesPage />} />
          <Route path="merci" element={<ThankYouPage />} />
          
          {/* Pages institutionnelles */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="conditions-generales" element={<TermsPage />} />
          <Route path="politique-confidentialite" element={<PrivacyPage />} />
          
          {/* 404 */}
          <Route path="*" element={<div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">404 - Page non trouvée</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}
