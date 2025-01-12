import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { mockData } from '../data/mockData';
import type { Data } from '../data/mockData';

// Lazy load pages
const Home = React.lazy(() => import('../pages/Home'));
const Modalities = React.lazy(() => import('../pages/Modalities'));
const Instructors = React.lazy(() => import('../pages/Instructors'));
const Gyms = React.lazy(() => import('../pages/Gyms'));
const Schedule = React.lazy(() => import('../pages/Schedule'));
const Contact = React.lazy(() => import('../pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('../pages/PrivacyPolicy'));

const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route 
          path="/" 
          element={<Home data={mockData.pages.home as unknown as Data['pages']['home']} />} 
        />
        <Route 
          path="/modalidades" 
          element={<Modalities data={mockData.pages.modalities as unknown as Data['pages']['modalities']} />} 
        />
        <Route 
          path="/instrutores" 
          element={<Instructors data={mockData.pages.instructors as unknown as Data['pages']['instructors']} />} 
        />
        <Route 
          path="/ginasios" 
          element={<Gyms data={mockData.pages.gyms as unknown as Data['pages']['gyms']} />} 
        />
        <Route 
          path="/horarios" 
          element={<Schedule data={mockData.pages.schedule as unknown as Data['pages']['schedule']} />} 
        />
        <Route 
          path="/contactos" 
          element={<Contact data={mockData.pages.contact as unknown as Data['pages']['contact']} />} 
        />
        <Route 
          path="/politica-de-privacidade" 
          element={<PrivacyPolicy />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;