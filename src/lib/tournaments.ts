import { Tournament, TournamentFilters, TournamentSorting } from '@/types/tournament';
import tournamentsData from '@/data/tournaments.json';

export function getAllTournaments(): Tournament[] {
  return tournamentsData as Tournament[];
}

export function getFeaturedTournaments(): Tournament[] {
  return tournamentsData.filter(tournament => tournament.isFeatured) as Tournament[];
}

export function getTournamentById(id: string): Tournament | null {
  const tournament = tournamentsData.find(t => t.id === id);
  return tournament ? tournament as Tournament : null;
}

export function filterTournaments(
  filters: TournamentFilters,
  sorting: TournamentSorting = { field: 'date', direction: 'asc' }
): Tournament[] {
  let filtered = [...tournamentsData] as Tournament[];

  // Apply sport filter
  if (filters.sport && filters.sport !== 'all') {
    filtered = filtered.filter(tournament => tournament.sport === filters.sport);
  }

  // Apply date range filter
  if (filters.dateRange) {
    const { start, end } = filters.dateRange;
    filtered = filtered.filter(tournament => {
      const tournamentDate = new Date(tournament.date);
      const startDate = new Date(start);
      const endDate = new Date(end);
      return tournamentDate >= startDate && tournamentDate <= endDate;
    });
  }

  // Apply location filter
  if (filters.location) {
    const searchTerm = filters.location.toLowerCase();
    filtered = filtered.filter(tournament => 
      tournament.venue.name.toLowerCase().includes(searchTerm) ||
      tournament.venue.address.toLowerCase().includes(searchTerm)
    );
  }

  // Apply sorting
  filtered.sort((a, b) => {
    let aValue: string | Date;
    let bValue: string | Date;

    if (sorting.field === 'date') {
      aValue = new Date(a.date);
      bValue = new Date(b.date);
    } else {
      aValue = new Date(a.createdAt);
      bValue = new Date(b.createdAt);
    }

    const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    return sorting.direction === 'asc' ? comparison : -comparison;
  });

  return filtered;
}

export function getUpcomingTournaments(): Tournament[] {
  const now = new Date();
  return tournamentsData.filter(tournament => new Date(tournament.date) > now) as Tournament[];
}

export function getSportTypes(): string[] {
  const sports = new Set(tournamentsData.map(t => t.sport));
  return Array.from(sports).sort();
}