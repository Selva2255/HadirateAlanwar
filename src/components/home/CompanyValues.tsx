import React from 'react';
import { Shield, Clock, Lightbulb, Recycle } from 'lucide-react';

const CompanyValues: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Qualité',
      description: 'Nous nous engageons à fournir des services de la plus haute qualité, avec une attention particulière aux détails et à la durabilité.'
    },
    {
      icon: Clock,
      title: 'Réactivité',
      description: 'Notre équipe d\'intervention assure une réponse rapide aux demandes urgentes pour maintenir un service continu.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies d\'éclairage pour offrir des solutions énergétiquement efficaces et avant-gardistes.'
    },
    {
      icon: Recycle,
      title: 'Durabilité',
      description: 'Nous concevons nos projets avec une vision durable, minimisant l\'impact environnemental tout en maximisant l\'efficacité.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des principes qui guident notre travail quotidien
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="p-3 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;