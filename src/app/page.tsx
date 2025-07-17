import Link from 'next/link';
import { getFeaturedTournaments } from '@/lib/tournaments';
import TournamentCard from '@/components/TournamentCard';

export default function Home() {
  const featuredTournaments = getFeaturedTournaments();

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 z-1" style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
          `
        }}></div>
        
        <div className="relative z-2 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center animate-in">
            <div className="inline-flex items-center px-4 py-2 mb-8 border rounded-full text-sm font-medium" style={{ 
              background: 'var(--surface)', 
              borderColor: 'var(--border)',
              color: 'var(--primary)',
              gap: 'var(--space-sm)'
            }}>
              🏆 Bangalore's Premier Racquet Sports Platform
            </div>
            
            <h1 className="h1 mb-6" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Compete in Elite Racquet Sports Tournaments
            </h1>
            
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-2xl)' }}>
              Join Bangalore's most competitive tennis, badminton, and squash tournaments. Connect with players, track your progress, and dominate the courts.
            </p>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/tournaments" className="btn btn-primary">
                Join Tournament
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Tournaments Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title h2">Upcoming Tournaments</h2>
            <p className="section-description body-large">
              Register now for these exciting competitions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} featured />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/tournaments" className="btn btn-primary">
              View All Tournaments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
