import { create } from 'zustand';
import { AuthState, UserProfile } from '../types/auth';
import Papa from 'papaparse';

// Simulated user database
const users: UserProfile[] = [
  {
    id: '1',
    username: 'tech1',
    fullName: 'Mohammed Alami',
    role: 'maintenance',
    department: 'Maintenance & Exploitation',
    email: 'mohammed.alami@hadirate-al-anwar.com',
    phoneNumber: '+212 6XX XX XX XX'
  },
  {
    id: '2',
    username: 'engineer1',
    fullName: 'Fatima Benali',
    role: 'studies',
    department: 'Études & Contrôle Qualité',
    email: 'fatima.benali@hadirate-al-anwar.com'
  }
];

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  
  login: async (username: string, password: string) => {
    // Simulate API call
    const user = users.find(u => u.username === username);
    
    if (user) {
      set({
        isAuthenticated: true,
        user: {
          ...user,
          lastLogin: new Date().toISOString()
        }
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  
  logout: () => {
    set({
      isAuthenticated: false,
      user: null
    });
  },
  
  exportUserData: () => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    
    const data = [{
      'Nom complet': user.fullName,
      'Nom d\'utilisateur': user.username,
      'Rôle': user.role,
      'Département': user.department,
      'Email': user.email,
      'Téléphone': user.phoneNumber || 'Non renseigné',
      'Dernière connexion': user.lastLogin || 'Première connexion'
    }];
    
    const csv = Papa.unparse(data, {
      delimiter: ';',
      header: true
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `profile_${user.username}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}));