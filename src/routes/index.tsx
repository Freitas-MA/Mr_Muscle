import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('../pages/Home'));
const Modalities = React.lazy(() => import('../pages/Modalities'));
const Instructors = React.lazy(() => import('../pages/Instructors'));
const Gyms = React.lazy(() => import('../pages/Gyms'));
const Schedule = React.lazy(() => import('../pages/Schedule'));
const Contact = React.lazy(() => import('../pages/Contact'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modalidades" element={<Modalities />} />
        <Route path="/instrutores" element={<Instructors />} />
        <Route path="/ginasios" element={<Gyms />} />
        <Route path="/horarios" element={<Schedule />} />
        <Route path="/contactos" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;