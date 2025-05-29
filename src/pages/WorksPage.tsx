import React, { useState } from 'react';
import { HardHat, Calendar, Users, Truck } from 'lucide-react';

const WorksPage: React.FC = () => {
  const [foreman, setForeman] = useState('');
  const [workType, setWorkType] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<'planned' | 'inProgress' | 'completed'>('planned');
  const [materials, setMaterials] = useState<string[]>([]);
  const [observations, setObservations] = useState('');
  
  const workTypes = [
    'Installation de nouveaux candélabres',
    'Remplacement de luminaires défectueux',
    'Mise en service de coffrets',
    'Études d\'implantation',
    'Extension de réseau',
    'Maintenance préventive',
    'Rénovation complète'
  ];
  
  const materialOptions = [
    'Candélabres',
    'Luminaires',
    'Coffrets électriques',
    'Câbles d\'alimentation',
    'Accessoires de fixation',
    'Outils spécialisés',
    'Équipement de protection'
  ];
  
  const handleMaterialToggle = (item: string) => {
    if (materials.includes(item)) {
      setMaterials(materials.filter(i => i !== item));
    } else {
      setMaterials([...materials, item]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically save the data to a backend
    console.log({
      foreman,
      workType,
      location,
      status,
      materials,
      observations,
      date: new Date().toISOString()
    });
    
    // Reset form or show success message
    alert('Fiche de travaux enregistrée avec succès !');
  };
  
  const upcomingWorks = [
    {
      id: '1',
      type: 'Installation de nouveaux candélabres',
      location: 'Boulevard Mohammed V',
      date: '2025-05-15',
      team: 'Équipe A'
    },
    {
      id: '2',
      type: 'Remplacement de luminaires',
      location: 'Rue Hassan II',
      date: '2025-05-18',
      team: 'Équipe B'
    },
    {
      id: '3',
      type: 'Mise en service de coffrets',
      location: 'Zone Industrielle',
      date: '2025-05-22',
      team: 'Équipe A'
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-accent-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <HardHat size={36} />
            <div>
              <h1 className="text-3xl font-bold">Travaux et Interventions</h1>
              <p className="mt-2 text-accent-100">
                Gestion des chantiers et travaux réalisés sur le terrain
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4 text-accent-500">
                <Truck size={24} className="mr-2" />
                <h2 className="text-xl font-semibold">Fiche de Travaux</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="foreman" className="label">Chef de chantier</label>
                  <input
                    type="text"
                    id="foreman"
                    className="input"
                    value={foreman}
                    onChange={(e) => setForeman(e.target.value)}
                    placeholder="Nom du chef de chantier"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="workType" className="label">Type de travaux</label>
                  <select
                    id="workType"
                    className="input"
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                    required
                  >
                    <option value="">Sélectionner un type</option>
                    {workTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="label">Localisation</label>
                    <input
                      type="text"
                      id="location"
                      className="input"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Adresse du chantier"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="status" className="label">État du chantier</label>
                    <select
                      id="status"
                      className="input"
                      value={status}
                      onChange={(e) => setStatus(e.target.value as 'planned' | 'inProgress' | 'completed')}
                      required
                    >
                      <option value="planned">Planifié</option>
                      <option value="inProgress">En cours</option>
                      <option value="completed">Terminé</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="label">Matériel utilisé</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border rounded-md p-3">
                    {materialOptions.map((item) => (
                      <div key={item} className="flex items-center">
                        <input
                          type="checkbox"
                          id={item}
                          checked={materials.includes(item)}
                          onChange={() => handleMaterialToggle(item)}
                          className="mr-2"
                        />
                        <label htmlFor={item} className="text-sm text-gray-700">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="observations" className="label">Observations ou incidents</label>
                  <textarea
                    id="observations"
                    className="input h-24"
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="Notes sur le déroulement du chantier, incidents ou observations particulières"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="btn-accent w-full md:w-auto">
                    Enregistrer la fiche
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-accent-500">
                <Calendar size={24} className="mr-2" />
                <h2 className="text-xl font-semibold">Travaux à venir</h2>
              </div>
              <div className="space-y-4">
                {upcomingWorks.map((work) => (
                  <div key={work.id} className="border-b pb-3 last:border-0">
                    <h3 className="font-medium">{work.type}</h3>
                    <p className="text-sm text-gray-600">{work.location}</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-gray-500">Date: {work.date}</p>
                      <p className="text-xs font-medium">{work.team}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-accent-500">
                <Users size={24} className="mr-2" />
                <h2 className="text-xl font-semibold">Équipes de Terrain</h2>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Équipe A</span>
                  <span className="text-sm text-success-600">Disponible</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Équipe B</span>
                  <span className="text-sm text-primary-600">En intervention</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Équipe C</span>
                  <span className="text-sm text-success-600">Disponible</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Équipe D</span>
                  <span className="text-sm text-gray-500">Hors service</span>
                </li>
              </ul>
              <button className="mt-6 btn bg-gray-100 text-gray-800 hover:bg-gray-200 w-full">
                Gérer les équipes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;