
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ResidentialPage = lazy(() => import('../pages/residential/page'));
const CommercialPage = lazy(() => import('../pages/commercial/page'));
const PricingPage = lazy(() => import('../pages/pricing/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfUsePage = lazy(() => import('../pages/terms-of-use/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/residential',
    element: <ResidentialPage />,
  },
  {
    path: '/commercial',
    element: <CommercialPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms-of-use',
    element: <TermsOfUsePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
