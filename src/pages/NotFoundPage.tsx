import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <AlertTriangle size={64} className="mx-auto text-warning-500" />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Page non trouvée</h2>
          <p className="mt-4 text-lg text-gray-600">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link
            to="/"
            className="btn-primary flex items-center space-x-2 px-6 py-3"
          >
            <Home size={20} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;