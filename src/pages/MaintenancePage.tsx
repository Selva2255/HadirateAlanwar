import React, { useState } from 'react';
import { Wrench, CheckCircle, AlertTriangle, Clipboard } from 'lucide-react';
import { InterventionType } from '../types';

const MaintenancePage: React.FC = () => {
  const [technician, setTechnician] = useState('');
  const [interventionType, setInterventionType] = useState<InterventionType>('none');
  const [location, setLocation] = useState('');
  const [equipmentUsed, setEquipmentUsed] = useState<string[]>([]);
  const [problems, setProblems] = useState('');
  const [actions, setActions] = useState('');
  
  const interventionTypes = [
    { value: 'none', label: 'Rien à signaler' },
    { value: 'outOfZone', label: 'Hors zone' },
    { value: 'missingPhase', label: 'Manque phase' },
    { value: 'phaseToGround', label: 'Phase à la terre' },
    { value: 'looping', label: 'Bouclage' },
    { value: 'clockAdjustment', label: 'Réglage horloge' },
    { value: 'circuitBreakerRepair', label: 'Réparation disjoncteur' },
    { value: 'visitDoor', label: 'Porte visite' },
    { value: 'cabinetRepair', label: 'Réparation coffret' },
    { value: 'cableRepair', label: 'Réparation câble' },
    { value: 'connection', label: 'Branchement' },
    { value: 'luminaireRepair', label: 'Réparation luminaire' },
    { value: 'lamppostStraightening', label: 'Redressement candélabre' },
    { value: 'lamppostMovement', label: 'Déplacement candélabre' },
    { value: 'utilityComplaint', label: 'Réclamation RADEEMA / ONEE' }
  ];
  
  const equipmentOptions = [
    { category: 'Électrique', items: ['Disjoncteur', 'Fusible', 'Horloge', 'Contacteur', 'Connecteur'] },
    { category: 'Câblage', items: ['Câble Souple', 'Câble Torsadé', 'Câble Armé', 'Boîte de jonction', 'Gaine thermo'] },
    { category: 'Luminaires', items: ['Urbalite', 'Novatilu', 'Sline', 'Cline', 'Vmax', 'HFL', 'Tilal', 'Feuille', 'ELUX'] },
    { category: 'Composants', items: ['Driver 75W', 'Driver 100W', 'Driver 120W', 'Driver 150W', 'Driver 165W'] }
  ];
  
  const handleEquipmentToggle = (item: string) => {
    if (equipmentUsed.includes(item)) {
      setEquipmentUsed(equipmentUsed.filter(i => i !== item));
    } else {
      setEquipmentUsed([...equipmentUsed, item]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically save the data to a backend
    console.log({
      technician,
      interventionType,
      location,
      equipmentUsed,
      problems,
      actions,
      date: new Date().toISOString()
    });
    
    // Reset form or show success message
    alert('Intervention enregistrée avec succès !');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Wrench size={36} />
            <div>
              <h1 className="text-3xl font-bold">Maintenance & Exploitation</h1>
              <p className="mt-2 text-primary-200">
                Gestion des interventions techniques et maintenance des équipements
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4 text-primary-700">
            <Clipboard size={24} className="mr-2" />
            <h2 className="text-xl font-semibold">Formulaire d'Intervention</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="technician" className="label">Technicien en charge</label>
              <input
                type="text"
                id="technician"
                className="input"
                value={technician}
                onChange={(e) => setTechnician(e.target.value)}
                placeholder="Nom du technicien"
                required
              />
            </div>
            
            <div>
              <label className="label">Type d'intervention</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {interventionTypes.map((type) => (
                  <div key={type.value} className="flex items-center">
                    <input
                      type="radio"
                      id={type.value}
                      name="interventionType"
                      value={type.value}
                      checked={interventionType === type.value}
                      onChange={() => setInterventionType(type.value as InterventionType)}
                      className="mr-2"
                    />
                    <label htmlFor={type.value} className="text-sm text-gray-700">
                      {type.label}
                    </label>
                  </div>
                ))}
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
                placeholder="Adresse ou coordonnées GPS"
                required
              />
            </div>
            
            <div>
              <label className="label">Équipements utilisés</label>
              <div className="space-y-4">
                {equipmentOptions.map((category) => (
                  <div key={category.category} className="border rounded-md p-3">
                    <h4 className="font-medium text-gray-700 mb-2">{category.category}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {category.items.map((item) => (
                        <div key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            id={item}
                            checked={equipmentUsed.includes(item)}
                            onChange={() => handleEquipmentToggle(item)}
                            className="mr-2"
                          />
                          <label htmlFor={item} className="text-sm text-gray-700">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="problems" className="label">Problèmes constatés</label>
              <textarea
                id="problems"
                className="input h-24"
                value={problems}
                onChange={(e) => setProblems(e.target.value)}
                placeholder="Description des problèmes observés"
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="actions" className="label">Actions réalisées</label>
              <textarea
                id="actions"
                className="input h-24"
                value={actions}
                onChange={(e) => setActions(e.target.value)}
                placeholder="Description des actions effectuées"
                required
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="btn-primary w-full md:w-auto">
                Enregistrer l'intervention
              </button>
            </div>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4 text-success-600">
              <CheckCircle size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Interventions récentes</h2>
            </div>
            <p className="text-gray-500 italic">Aucune intervention récente à afficher.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4 text-warning-600">
              <AlertTriangle size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Alertes en cours</h2>
            </div>
            <p className="text-gray-500 italic">Aucune alerte en cours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;