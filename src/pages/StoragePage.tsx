import React, { useState } from 'react';
import { Package, Plus, Minus, Clipboard } from 'lucide-react';

interface MaterialItem {
  id: string;
  reference: string;
  brand: string;
  description: string;
  currentStock: number;
}

const StoragePage: React.FC = () => {
  const [manager, setManager] = useState('');
  const [materialItems, setMaterialItems] = useState<MaterialItem[]>([
    { id: '1', reference: '', brand: 'CARANDINI', description: 'S-Line 4000 (34w)', currentStock: 10 },
    { id: '2', reference: '804986', brand: '-', description: 'S-Line 6000 gris (56w)', currentStock: 2 },
    { id: '3', reference: '', brand: '-', description: 'S-Line 6000 Marron (56w)', currentStock: 8 },
    { id: '4', reference: '723410', brand: 'Novatilu', description: 'ALMS 75W', currentStock: 15 },
    { id: '5', reference: '902345', brand: 'Schreder', description: 'NANO 2 LED', currentStock: 5 }
  ]);
  
  // New material form state
  const [newReference, setNewReference] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStock, setNewStock] = useState(0);
  
  // Stock update form state
  const [selectedItemId, setSelectedItemId] = useState('');
  const [quantityChange, setQuantityChange] = useState(0);
  const [remark, setRemark] = useState('');
  
  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: MaterialItem = {
      id: Date.now().toString(),
      reference: newReference,
      brand: newBrand,
      description: newDescription,
      currentStock: newStock
    };
    
    setMaterialItems([...materialItems, newItem]);
    
    // Reset form
    setNewReference('');
    setNewBrand('');
    setNewDescription('');
    setNewStock(0);
  };
  
  const handleStockUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedItemId) return;
    
    setMaterialItems(materialItems.map(item => {
      if (item.id === selectedItemId) {
        return {
          ...item,
          currentStock: Math.max(0, item.currentStock + quantityChange)
        };
      }
      return item;
    }));
    
    // Reset form
    setSelectedItemId('');
    setQuantityChange(0);
    setRemark('');
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-success-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Package size={36} />
            <div>
              <h1 className="text-3xl font-bold">Stockage du Matériel</h1>
              <p className="mt-2 text-success-200">
                Gestion de l'inventaire et des stocks de matériel électrique
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0 text-success-700">
              <Clipboard size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Inventaire du Stock</h2>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="manager" className="label">Responsable</label>
              <input
                type="text"
                id="manager"
                className="input max-w-xs"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                placeholder="Nom du responsable"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Réf. Article
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marque
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock Actuel
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {materialItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.reference || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.brand || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.currentStock > 5 
                          ? 'bg-success-100 text-success-800' 
                          : item.currentStock > 0 
                            ? 'bg-warning-100 text-warning-800' 
                            : 'bg-error-100 text-error-800'
                      }`}>
                        {item.currentStock}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4 text-success-700">
              <Plus size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Ajouter un nouveau produit</h2>
            </div>
            
            <form onSubmit={handleAddMaterial} className="space-y-4">
              <div>
                <label htmlFor="newReference" className="label">Référence</label>
                <input
                  type="text"
                  id="newReference"
                  className="input"
                  value={newReference}
                  onChange={(e) => setNewReference(e.target.value)}
                  placeholder="Numéro de référence"
                />
              </div>
              
              <div>
                <label htmlFor="newBrand" className="label">Marque</label>
                <input
                  type="text"
                  id="newBrand"
                  className="input"
                  value={newBrand}
                  onChange={(e) => setNewBrand(e.target.value)}
                  placeholder="Nom de la marque"
                />
              </div>
              
              <div>
                <label htmlFor="newDescription" className="label">Description</label>
                <input
                  type="text"
                  id="newDescription"
                  className="input"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Description du produit"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="newStock" className="label">Quantité initiale</label>
                <input
                  type="number"
                  id="newStock"
                  className="input"
                  min="0"
                  value={newStock}
                  onChange={(e) => setNewStock(parseInt(e.target.value) || 0)}
                  required
                />
              </div>
              
              <div className="pt-2">
                <button type="submit" className="btn-success w-full">
                  Ajouter le produit
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4 text-success-700">
              <Minus size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Déclarer un mouvement de stock</h2>
            </div>
            
            <form onSubmit={handleStockUpdate} className="space-y-4">
              <div>
                <label htmlFor="selectedItem" className="label">Produit concerné</label>
                <select
                  id="selectedItem"
                  className="input"
                  value={selectedItemId}
                  onChange={(e) => setSelectedItemId(e.target.value)}
                  required
                >
                  <option value="">Sélectionner un produit</option>
                  {materialItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.description} ({item.brand || 'Sans marque'})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="quantityChange" className="label">Quantité (+ pour entrée, - pour sortie)</label>
                <input
                  type="number"
                  id="quantityChange"
                  className="input"
                  value={quantityChange}
                  onChange={(e) => setQuantityChange(parseInt(e.target.value) || 0)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="remark" className="label">Remarque</label>
                <textarea
                  id="remark"
                  className="input h-20"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  placeholder="Raison du mouvement de stock"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button type="submit" className="btn-primary w-full">
                  Enregistrer le mouvement
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoragePage;