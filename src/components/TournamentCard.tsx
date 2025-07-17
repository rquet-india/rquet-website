import { Tournament } from '@/types/tournament';
import { MapPin, Users } from 'lucide-react';

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

  const getStatusBadge = (status: string) => {
    if (status === 'open') return 'status-open';
    if (status === 'full') return 'status-full';
    return 'status-upcoming';
  };

  return (
    <div className="card card-tournament hover-lift">
      <div className="tournament-header">
        <div>
          <h3 className="h4 mb-sm">{tournament.title}</h3>
          <div className="caption" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            {formatDate(tournament.date)} at {formatTime(tournament.time)}
          </div>
        </div>
        <span className={`tournament-status ${getStatusBadge('open')}`}>
          Open
        </span>
      </div>
      
      <div className="flex gap-xl mt-md mb-md caption" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-sm">
          <MapPin size={14} />
          {tournament.venue.name}
        </span>
        <span className="flex items-center gap-sm">
          <Users size={14} />
          {tournament.organizer.name}
        </span>
        <span className="flex items-center gap-sm">
          🎾 {tournament.sport.charAt(0).toUpperCase() + tournament.sport.slice(1).replace('-', ' ')}
        </span>
      </div>
      
      <div className="mt-md mb-md" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.125rem' }}>
        Prize Pool: ₹{tournament.prizePool || '5,000'}
      </div>
      
      <a
        href={tournament.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Register Now
      </a>
    </div>
  );
}