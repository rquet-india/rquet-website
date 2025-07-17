'use client';

import Link from 'next/link';
import { ArrowLeft, CalendarDays, MapPin, Users, ExternalLink, Clock, Phone, Mail, Share2 } from 'lucide-react';
import { Tournament } from '@/types/tournament';

interface TournamentDetailProps {
  tournament: Tournament;
}

export default function TournamentDetail({ tournament }: TournamentDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tournament.title,
          text: tournament.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Tournament URL copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/tournaments"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Tournaments
        </Link>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-white`}>
                    {tournament.sport.charAt(0).toUpperCase() + tournament.sport.slice(1).replace('-', ' ')}
                  </span>
                  {tournament.isFeatured && (
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{tournament.title}</h1>
                <p className="text-lg text-blue-100">{tournament.description}</p>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all"
              >
                <Share2 size={20} className="mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Tournament Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tournament Details</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CalendarDays className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Date</h3>
                      <p className="text-gray-600 dark:text-gray-300">{formatDate(tournament.date)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-green-600 dark:text-green-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Time</h3>
                      <p className="text-gray-600 dark:text-gray-300">{formatTime(tournament.time)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-purple-600 dark:text-purple-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Venue</h3>
                      <p className="text-gray-600 dark:text-gray-300">{tournament.venue.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{tournament.venue.address}</p>
                      <a
                        href={tournament.venue.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm mt-1"
                      >
                        View on Google Maps
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organizer Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Organizer</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Organization</h3>
                      <p className="text-gray-600 dark:text-gray-300">{tournament.organizer.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-green-600 dark:text-green-400 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Contact</h3>
                      <a
                        href={`tel:${tournament.organizer.contact}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      >
                        {tournament.organizer.contact}
                      </a>
                    </div>
                  </div>
                  
                  {tournament.organizer.email && (
                    <div className="flex items-start space-x-3">
                      <Mail className="text-purple-600 dark:text-purple-400 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                        <a
                          href={`mailto:${tournament.organizer.email}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                        >
                          {tournament.organizer.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Location</h2>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(tournament.venue.address)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Note: Replace YOUR_API_KEY with a valid Google Maps API key for the map to work properly.
              </p>
            </div>

            {/* Registration CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Join?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Don't miss out on this exciting tournament. Register now to secure your spot!
              </p>
              <a
                href={tournament.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105"
              >
                Register Now
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}