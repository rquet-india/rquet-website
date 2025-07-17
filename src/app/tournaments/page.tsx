'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, MapPin, Users } from 'lucide-react';
import { getAllTournaments, getSportTypes, filterTournaments } from '@/lib/tournaments';
import { TournamentFilters, TournamentSorting } from '@/types/tournament';
import TournamentCard from '@/components/TournamentCard';
import TournamentFiltersComponent from '@/components/TournamentFilters';

function TournamentsContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<TournamentFilters>({});
  const [sorting, setSorting] = useState<TournamentSorting>({
    field: 'date',
    direction: 'asc'
  });

  const sportTypes = getSportTypes();
  const filteredTournaments = filterTournaments(filters, sorting);

  // Apply URL params on mount
  useEffect(() => {
    const sportParam = searchParams.get('sport');
    if (sportParam) {
      setFilters(prev => ({ ...prev, sport: sportParam }));
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 py-12 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Racquet Sports Tournaments
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover and join exciting tournaments across Bangalore. Filter by sport, location, and date to find your perfect match.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="text-blue-600 dark:text-blue-400" size={24} />
              <span className="text-gray-700 dark:text-gray-300">
                {filteredTournaments.length} tournaments found
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="text-green-600 dark:text-green-400" size={24} />
              <span className="text-gray-700 dark:text-gray-300">
                25+ venues across Bangalore
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="text-purple-600 dark:text-purple-400" size={24} />
              <span className="text-gray-700 dark:text-gray-300">
                All skill levels welcome
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <TournamentFiltersComponent
                filters={filters}
                sorting={sorting}
                onFiltersChange={setFilters}
                onSortingChange={setSorting}
                sportTypes={sportTypes}
              />
            </div>
          </div>

          {/* Tournament Grid */}
          <div className="lg:col-span-3">
            {filteredTournaments.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🎾</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No tournaments found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or check back later for new tournaments.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTournaments.map((tournament) => (
                  <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TournamentsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TournamentsContent />
    </Suspense>
  );
}