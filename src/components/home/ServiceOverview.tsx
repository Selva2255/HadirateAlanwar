import React from 'react';
import ServiceCard from './ServiceCard';
import { Wrench, FileBarChart, HardHat, Package } from 'lucide-react';

const ServiceOverview: React.FC = () => {
  const services = [
    {
      title: 'Maintenance & Exploitation',
      description: 'Interventions sur le terrain, réparations et maintenance préventive des équipements d\'éclairage.',
      icon: Wrench,
      path: '/maintenance',
      color: 'text-primary-600'
    },
    {
      title: 'Études & Contrôle Qualité',
      description: 'Analyse des projets, mise à jour du patrimoine et contrôle qualité des installations.',
      icon: FileBarChart,
      path: '/studies',
      color: 'text-secondary-600'
    },
    {
      title: 'Travaux & Interventions',
      description: 'Réalisation de travaux, nouvelles installations et modifications sur l\'infrastructure existante.',
      icon: HardHat,
      path: '/works',
      color: 'text-accent-500'
    },
    {
      title: 'Stockage du Matériel',
      description: 'Gestion des stocks de matériel électrique et d\'éclairage, suivi des entrées et sorties.',
      icon: Package,
      path: '/storage',
      color: 'text-success-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez un domaine pour accéder aux services dédiés
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animate">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              path={service.path}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;