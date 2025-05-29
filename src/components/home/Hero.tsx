import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Logo variant="main" size="lg" className="mr-4" />
            </div>
            <p className="text-xl md:text-2xl mb-6 text-primary-100">
              Solutions d'éclairage public et gestion énergétique
            </p>
            <p className="text-primary-200 mb-8 text-lg">
              Une initiative innovante pour un éclairage public efficace et durable. Notre expertise technique et notre savoir-faire opérationnel garantissent des services de qualité.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="btn-primary flex items-center gap-2"
              >
                Découvrir nos services <ArrowRight size={18} />
              </Link>
              <Link
                to="/employee"
                className="btn bg-white text-primary-800 hover:bg-gray-100 focus:ring-primary-500"
              >
                Espace Employé
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white border-opacity-20">
              <div className="flex justify-between mb-6">
                <div className="flex items-center">
                  <Logo variant="prodair" size="sm" />
                </div>
                <div className="flex items-center">
                  <Logo variant="novelia" size="sm" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Prod'Air</h3>
                  <p className="text-sm text-primary-100">
                    Études techniques, contrôle qualité, système d'information géographique (SIG) et développement.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Novelia</h3>
                  <p className="text-sm text-primary-100">
                    Travaux sur le terrain, exploitation, maintenance et interventions rapides.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;