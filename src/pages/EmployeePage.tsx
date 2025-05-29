import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import LoginForm from '../components/auth/LoginForm';
import ProfileHeader from '../components/employee/ProfileHeader';
import { Users, Bell, Upload, FileText } from 'lucide-react';

const EmployeePage: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) {
    return <LoginForm />;
  }
  
  if (!user) {
    return <Navigate to="/\" replace />;
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600 mb-4">
              <Users size={28} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Mon Équipe</h2>
            <p className="text-gray-600 mb-4">
              Gérez votre équipe, consultez les plannings et les tâches assignées.
            </p>
            <button className="mt-auto btn-primary w-full">
              Accéder
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mb-4">
              <FileText size={28} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Mes Fiches</h2>
            <p className="text-gray-600 mb-4">
              Remplissez et consultez vos fiches de service et rapports d'intervention.
            </p>
            <button className="mt-auto btn-secondary w-full">
              Accéder
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-accent-100 text-accent-500 mb-4">
              <Upload size={28} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Photos de Terrain</h2>
            <p className="text-gray-600 mb-4">
              Téléchargez et organisez vos photos prises sur le terrain lors des interventions.
            </p>
            <button className="mt-auto btn-accent w-full">
              Accéder
            </button>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6 text-primary-700">
            <Bell size={24} className="mr-2" />
            <h2 className="text-xl font-semibold">Notifications Récentes</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-primary-500 bg-primary-50 rounded-r-md">
              <h3 className="font-medium text-primary-800">Intervention planifiée</h3>
              <p className="text-primary-700">Une nouvelle intervention a été assignée à votre équipe pour demain.</p>
              <p className="text-sm text-primary-600 mt-1">Il y a 2 heures</p>
            </div>
            
            <div className="p-4 border-l-4 border-success-500 bg-success-50 rounded-r-md">
              <h3 className="font-medium text-success-800">Rapport approuvé</h3>
              <p className="text-success-700">Votre rapport d'intervention du 10/05/2025 a été validé.</p>
              <p className="text-sm text-success-600 mt-1">Hier</p>
            </div>
            
            <div className="p-4 border-l-4 border-warning-500 bg-warning-50 rounded-r-md">
              <h3 className="font-medium text-warning-800">Alerte stock</h3>
              <p className="text-warning-700">Le stock de câbles torsadés est presque épuisé.</p>
              <p className="text-sm text-warning-600 mt-1">Il y a 3 jours</p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <button className="btn-ghost">
              Voir toutes les notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;