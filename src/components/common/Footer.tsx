import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo size={28} className="text-white" />
              <span className="ml-3 text-xl font-semibold">Hadirate Al Anwar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Une initiative innovante au service de l'éclairage public et de la gestion énergétique.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-primary-300">
                <Logo variant="prodair" size={20} />
                <span className="ml-2 text-sm">Prod'Air</span>
              </div>
              <div className="flex items-center text-accent-300">
                <Logo variant="novelia" size={20} />
                <span className="ml-2 text-sm">Novelia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/maintenance" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Maintenance & Exploitation
                </Link>
              </li>
              <li>
                <Link to="/studies" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Études & Contrôle Qualité
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Travaux et Interventions
                </Link>
              </li>
              <li>
                <Link to="/storage" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Stockage du Matériel
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-300 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Rue de l'Éclairage, 12345 Ville</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-300 flex-shrink-0" />
                <span className="text-gray-300">+212 5XX XX XX XX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-300 flex-shrink-0" />
                <span className="text-gray-300">contact@hadirate-al-anwar.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-primary-300 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Lun - Ven: 8h30 - 17h30<br />Sam: 9h00 - 13h00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hadirate Al Anwar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;