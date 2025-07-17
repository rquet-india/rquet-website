import Link from 'next/link';
import { Tournament } from '@/types/tournament';
import { CalendarDays, MapPin, Users, ExternalLink } from 'lucide-react';

interface TournamentCardProps {
  tournament: Tournament;
  featured?: boolean;
}

export default function TournamentCard({ tournament, featured = false }: TournamentCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getSportColor = (sport: string) => {
    const colors = {
      'badminton': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'squash': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'tennis': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'table-tennis': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    };
    return colors[sport as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <div className={`group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/90 dark:hover:bg-slate-700/90 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
      <div className="p-6 relative">
        {featured && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-bl-xl">
            <span className="text-sm font-medium">Featured</span>
          </div>
        )}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getSportColor(tournament.sport)} shadow-sm`}>
              {tournament.sport.charAt(0).toUpperCase() + tournament.sport.slice(1).replace('-', ' ')}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link href={`/tournaments/${tournament.id}`}>
            {tournament.title}
          </Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {tournament.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <CalendarDays size={16} className="mr-2" />
            <span className="text-sm">
              {formatDate(tournament.date)} at {formatTime(tournament.time)}
            </span>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{tournament.venue.name}</span>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Users size={16} className="mr-2" />
            <span className="text-sm">{tournament.organizer.name}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={`/tournaments/${tournament.id}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium text-sm transition-colors"
          >
            View Details
          </Link>
          
          <a
            href={tournament.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            Register
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}