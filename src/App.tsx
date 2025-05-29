import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import MaintenancePage from './pages/MaintenancePage';
import StudiesPage from './pages/StudiesPage';
import WorksPage from './pages/WorksPage';
import StoragePage from './pages/StoragePage';
import EmployeePage from './pages/EmployeePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="maintenance" element={<MaintenancePage />} />
          <Route path="studies" element={<StudiesPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="employee" element={<EmployeePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;