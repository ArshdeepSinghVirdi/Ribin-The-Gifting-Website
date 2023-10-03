import React from 'react'
import LandingPage from './Pages/LandingPage'
import RibinForBusinessPage from './Pages/RibinForBusinessPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PartnerWithUsPage from './Pages/PartnerWithUsPage';
import AboutUsPage from './Pages/AboutUsPage';
import Carrier from './Pages/Carrier';
import LegalPrivacyPolicy from './Pages/LegalPrivacyPolicy';
import LegalRefund from './Pages/LegalRefund';
import LegalTermsConditions from './Pages/LegalTermsConditions';
import EmployBenefits from './Pages/EmployBenefits';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ribinforbusiness" element={<RibinForBusinessPage />} />
        <Route path="/partnerwithus" element={<PartnerWithUsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/career" element={<Carrier />} />
        <Route path="/employbenefits" element={<EmployBenefits />} />
        <Route path="/legalprivacypolicy" element={<LegalPrivacyPolicy />} />
        <Route path="/legalrefund" element={<LegalRefund />} />
        <Route path="/legaltermsandconditions" element={<LegalTermsConditions />} />
      </Routes>
    </Router>
  )
}

export default App

