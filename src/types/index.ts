// Common Types

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: Department;
}

export type Department = 'maintenance' | 'studies' | 'works' | 'storage';

export interface MaterialItem {
  id: string;
  reference: string;
  brand: string;
  description: string;
  currentStock: number;
}

export interface MaintenanceIntervention {
  id: string;
  type: InterventionType;
  location: string;
  equipmentUsed: string[];
  problemsFound: string;
  actionsPerformed: string;
  technicianId: string;
  date: string;
}

export type InterventionType = 
  | 'none'
  | 'outOfZone'
  | 'missingPhase'
  | 'phaseToGround'
  | 'looping'
  | 'clockAdjustment'
  | 'circuitBreakerRepair'
  | 'visitDoor'
  | 'cabinetRepair'
  | 'cableRepair'
  | 'connection'
  | 'luminaireRepair'
  | 'lamppostStraightening'
  | 'lamppostMovement'
  | 'utilityComplaint';

export interface StudyProject {
  id: string;
  name: string;
  location: string;
  status: 'planned' | 'inProgress' | 'completed';
  qualityChecks: QualityCheck[];
  projectManagerId: string;
}

export interface QualityCheck {
  id: string;
  date: string;
  location: string;
  findings: string;
  recommendations: string;
  performed: boolean;
}

export interface WorksProject {
  id: string;
  type: string;
  location: string;
  status: 'planned' | 'inProgress' | 'completed';
  materialUsed: string[];
  observations: string;
  foremanId: string;
}