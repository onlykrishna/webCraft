import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from '@/layouts/AdminLayout';
import { ClientLayout } from '@/layouts/ClientLayout';
import { PublicLayout } from '@/layouts/PublicLayout';
import { ProtectedRoute } from '@/app/routes/ProtectedRoute';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { PricingPage } from '@/pages/PricingPage';
import { BlogPage } from '@/pages/BlogPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { AuditPage } from '@/pages/AuditPage';
import { AdminHomePage } from '@/features/admin/pages/AdminHomePage';
import { AdminLeadsPage } from '@/features/leads/pages/AdminLeadsPage';
import { AdminProjectsPage } from '@/features/projects/pages/AdminProjectsPage';
import { AdminBlogPage } from '@/features/blog/pages/AdminBlogPage';
import { AdminTestimonialsPage } from '@/features/testimonials/pages/AdminTestimonialsPage';
import { AdminAuditsPage } from '@/features/audits/pages/AdminAuditsPage';
import { ClientPortalPage } from '@/features/client-portal/pages/ClientPortalPage';

export const AppRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route index element={<HomePage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="pricing" element={<PricingPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="free-audit" element={<AuditPage />} />
    </Route>

    <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminHomePage />} />
        <Route path="leads" element={<AdminLeadsPage />} />
        <Route path="projects" element={<AdminProjectsPage />} />
        <Route path="blog" element={<AdminBlogPage />} />
        <Route path="testimonials" element={<AdminTestimonialsPage />} />
        <Route path="audits" element={<AdminAuditsPage />} />
      </Route>
    </Route>

    <Route path="/client/:id" element={<ClientLayout />}>
      <Route index element={<ClientPortalPage />} />
    </Route>
  </Routes>
);
