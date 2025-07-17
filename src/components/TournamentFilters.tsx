'use client';

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { TournamentFilters, TournamentSorting } from '@/types/tournament';

interface TournamentFiltersProps {
  filters: TournamentFilters;
  sorting: TournamentSorting;
  onFiltersChange: (filters: TournamentFilters) => void;
  onSortingChange: (sorting: TournamentSorting) => void;
  sportTypes: string[];
}

export default function TournamentFiltersComponent({
  filters,
  sorting,
  onFiltersChange,
  onSortingChange,
  sportTypes
}: TournamentFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSportChange = (sport: string) => {
    onFiltersChange({ ...filters, sport: sport === 'all' ? undefined : sport });
  };

  const handleLocationChange = (location: string) => {
    onFiltersChange({ ...filters, location: location || undefined });
  };

  const handleDateRangeChange = (field: 'start' | 'end', value: string) => {
    const dateRange = filters.dateRange || { start: '', end: '' };
    onFiltersChange({
      ...filters,
      dateRange: { ...dateRange, [field]: value }
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = filters.sport || filters.location || filters.dateRange;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter & Sort Tournaments
        </h2>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <Filter size={20} className="mr-2" />
          Filters
        </button>
      </div>

      <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
        {/* Sport Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sport Type
          </label>
          <select
            value={filters.sport || 'all'}
            onChange={(e) => handleSportChange(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Sports</option>
            {sportTypes.map(sport => (
              <option key={sport} value={sport}>
                {sport.charAt(0).toUpperCase() + sport.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by venue or area..."
              value={filters.location || ''}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={filters.dateRange?.start || ''}
              onChange={(e) => handleDateRangeChange('start', e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={filters.dateRange?.end || ''}
              onChange={(e) => handleDateRangeChange('end', e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Sorting */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={sorting.field}
              onChange={(e) => onSortingChange({ ...sorting, field: e.target.value as 'date' | 'createdAt' })}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="date">Tournament Date</option>
              <option value="createdAt">Recently Added</option>
            </select>
            <select
              value={sorting.direction}
              onChange={(e) => onSortingChange({ ...sorting, direction: e.target.value as 'asc' | 'desc' })}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex justify-end">
            <button
              onClick={clearFilters}
              className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={16} className="mr-2" />
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}