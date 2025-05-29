import React, { useState } from 'react';
import { FileBarChart, Map, CheckSquare, FileText } from 'lucide-react';

const StudiesPage: React.FC = () => {
  const [projectManager, setProjectManager] = useState('');
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<'planned' | 'inProgress' | 'completed'>('planned');
  const [findings, setFindings] = useState('');
  const [recommendations, setRecommendations] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically save the data to a backend
    console.log({
      projectManager,
      projectName,
      location,
      status,
      findings,
      recommendations,
      date: new Date().toISOString()
    });
    
    // Reset form or show success message
    alert('Rapport de contrôle qualité enregistré avec succès !');
  };
  
  const recentProjects = [
    {
      id: '1',
      name: 'Extension Quartier Est',
      location: 'Avenue Mohamed VI',
      status: 'completed',
      date: '2025-04-15'
    },
    {
      id: '2',
      name: 'Modernisation Centre-Ville',
      location: 'Rue Allal El Fassi',
      status: 'inProgress',
      date: '2025-05-02'
    },
    {
      id: '3',
      name: 'Nouveau Parc Industriel',
      location: 'Zone Industrielle Nord',
      status: 'planned',
      date: '2025-06-10'
    }
  ];
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-success-100 text-success-800">Terminé</span>;
      case 'inProgress':
        return <span className="px-2 py-1 text-xs rounded-full bg-primary-100 text-primary-800">En cours</span>;
      case 'planned':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Planifié</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-secondary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <FileBarChart size={36} />
            <div>
              <h1 className="text-3xl font-bold">Études, Patrimoine & Contrôle Qualité</h1>
              <p className="mt-2 text-secondary-200">
                Analyse des projets et mise à jour du patrimoine urbain
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4 text-secondary-700">
                <CheckSquare size={24} className="mr-2" />
                <h2 className="text-xl font-semibold">Rapport de Contrôle Qualité</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="projectManager" className="label">Chef de projet</label>
                  <input
                    type="text"
                    id="projectManager"
                    className="input"
                    value={projectManager}
                    onChange={(e) => setProjectManager(e.target.value)}
                    placeholder="Nom du chef de projet"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectName" className="label">Nom du projet</label>
                    <input
                      type="text"
                      id="projectName"
                      className="input"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Nom du projet"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="status" className="label">État du projet</label>
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
                  <label htmlFor="location" className="label">Localisation</label>
                  <input
                    type="text"
                    id="location"
                    className="input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Adresse ou coordonnées"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="findings" className="label">Anomalies détectées</label>
                  <textarea
                    id="findings"
                    className="input h-24"
                    value={findings}
                    onChange={(e) => setFindings(e.target.value)}
                    placeholder="Description des anomalies observées"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="recommendations" className="label">Recommandations techniques</label>
                  <textarea
                    id="recommendations"
                    className="input h-24"
                    value={recommendations}
                    onChange={(e) => setRecommendations(e.target.value)}
                    placeholder="Recommandations pour corriger les anomalies"
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="btn-secondary w-full md:w-auto">
                    Enregistrer le rapport
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-secondary-700">
                <Map size={24} className="mr-2" />
                <h2 className="text-xl font-semibold">Carte du Patrimoine</h2>
              </div>
              <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                <p className="text-gray-500">Carte interactive ici</p>
              </div>
              <p className="text-sm text-gray-600">
                Accédez à la carte complète du patrimoine d'éclairage public pour visualiser tous les points lumineux et équipements.
              </p>
              <button className="mt-4 btn bg-gray-100 text-gray-800 hover:bg-gray-200 w-full">
                Ouvrir la carte complète
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-secondary-700">
                <FileText size={24} className="mr-2" />
                <h2 className="text-xl font-semibold">Projets Récents</h2>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="border-b pb-3 last:border-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{project.name}</h3>
                      {getStatusBadge(project.status)}
                    </div>
                    <p className="text-sm text-gray-600">{project.location}</p>
                    <p className="text-xs text-gray-500">Date: {project.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesPage;