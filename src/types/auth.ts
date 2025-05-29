export type UserRole = 'maintenance' | 'studies' | 'works' | 'storage' | 'admin';

export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  role: UserRole;
  department: string;
  email: string;
  phoneNumber?: string;
  lastLogin?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  exportUserData: () => void;
}