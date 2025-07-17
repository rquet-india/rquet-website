export interface Tournament {
  id: string;
  title: string;
  description: string;
  sport: 'badminton' | 'squash' | 'tennis' | 'table-tennis';
  date: string;
  time: string;
  venue: {
    name: string;
    address: string;
    googleMapsUrl: string;
  };
  organizer: {
    name: string;
    contact: string;
    email?: string;
  };
  registrationUrl: string;
  isFeatured: boolean;
  createdAt: string;
}

export interface TournamentFilters {
  sport?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  location?: string;
}

export interface TournamentSorting {
  field: 'date' | 'createdAt';
  direction: 'asc' | 'desc';
}