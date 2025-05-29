import React from 'react';
import { Download, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const ProfileHeader: React.FC = () => {
  const { user, logout, exportUserData } = useAuthStore();
  
  if (!user) return null;
  
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.fullName}</h1>
            <p className="mt-1 text-sm text-gray-500">{user.department}</p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={exportUserData}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Download className="h-5 w-5 mr-2" />
              Exporter mes données
            </button>
            
            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
        
        <dl className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Rôle</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{user.role}</dd>
          </div>
          
          <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Email</dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">{user.email}</dd>
          </div>
          
          <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Dernière connexion</dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">
              {user.lastLogin ? new Date(user.lastLogin).toLocaleString('fr-FR') : 'Première connexion'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProfileHeader;