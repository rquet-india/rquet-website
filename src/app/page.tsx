import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Trophy } from 'lucide-react';
import { getFeaturedTournaments, getSportTypes } from '@/lib/tournaments';
import TournamentCard from '@/components/TournamentCard';

export default function Home() {
  const featuredTournaments = getFeaturedTournaments();
  const sportTypes = getSportTypes();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Swarm Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Swarm-style gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20">
              <span className="mr-2">🏸</span>
              Bangalore's Premier Sports Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Discover Racquet
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Sports Tournaments
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join the most exciting badminton, squash, tennis, and table tennis tournaments across Bangalore
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link
                href="/tournaments"
                className="group relative inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Browse Tournaments</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Selection - Swarm Style */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Choose Your Sport
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover tournaments across all racquet sports in Bangalore
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sportTypes.map((sport) => (
              <Link
                key={sport}
                href={`/tournaments?sport=${sport}`}
                className="group relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">
                    {sport === 'badminton' && '🏸'}
                    {sport === 'squash' && '🎾'}
                    {sport === 'tennis' && '🎾'}
                    {sport === 'table-tennis' && '🏓'}
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white capitalize group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {sport.replace('-', ' ')}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournaments - Swarm Style */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full text-blue-600 dark:text-cyan-400 text-sm font-medium mb-6 border border-blue-200/50 dark:border-cyan-400/20">
              ⭐ Featured Tournaments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Don't Miss These Events
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Handpicked tournaments happening soon in Bangalore - register now before spots fill up!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} featured />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/tournaments"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-2xl font-semibold hover:from-slate-800 hover:to-slate-700 dark:hover:from-slate-100 dark:hover:to-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Tournaments
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Rquet?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of players who trust Rquet for their tournament needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-6 mb-6 inline-block">
                <Trophy className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">50+</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Tournaments Listed</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Active tournaments across all sports</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-6 mb-6 inline-block">
                <Calendar className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Weekly</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">New Tournaments</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Fresh opportunities every week</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full p-6 mb-6 inline-block">
                <MapPin className="text-white" size={40} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">25+</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Venues Across Bangalore</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Convenient locations citywide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
