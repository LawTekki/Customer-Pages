export interface Lawyer {
  id: string;
  name: string;
  country: string;
  specialties: string[];
  hourlyRate: number;
  imageUrl: string;
  description?: string;
  availability: {
    status: string;
    isAvailable: boolean;
  };
} 