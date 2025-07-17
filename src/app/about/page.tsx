import { Trophy, Users, MapPin, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Rquet',
  description: 'Learn about Rquet, Bangalore\'s premier platform for discovering racquet sports tournaments.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Rquet
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your gateway to the thriving racquet sports community in Bangalore
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Rquet exists to connect racquet sports enthusiasts across Bangalore with exciting tournaments and competitions. 
            We believe that sports bring people together, build communities, and create lasting memories.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you're a seasoned player looking for your next challenge or a beginner wanting to dip your toes 
            into competitive sports, Rquet is your trusted companion in discovering the perfect tournament for your skill level.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Trophy className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Excellence</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We strive to showcase only the best tournaments and provide accurate, up-to-date information 
                to help you make informed decisions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Users className="text-green-600 dark:text-green-400 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Sports are about bringing people together. We celebrate the vibrant racquet sports community 
                that makes Bangalore special.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-600 dark:text-purple-400 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Accessibility</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We make it easy to discover tournaments across all areas of Bangalore, ensuring everyone 
                can find competitions near them.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="text-red-600 dark:text-red-400 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Passion</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We're passionate about racquet sports and believe in the positive impact they have on 
                physical and mental well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Sports We Cover */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sports We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🏸</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Badminton</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Singles and doubles tournaments across all skill levels
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Squash</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fast-paced indoor competitions for all ages
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tennis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Classic outdoor tournaments with various formats
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🏓</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Table Tennis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick and exciting indoor ping pong competitions
              </p>
            </div>
          </div>
        </div>

        {/* Why Bangalore */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Bangalore?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Bangalore, known as the Silicon Valley of India, is also home to a thriving sports culture. 
            The city's pleasant climate, numerous sports facilities, and active community make it the perfect 
            place for racquet sports enthusiasts.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            From corporate leagues to community tournaments, from beginner-friendly competitions to 
            professional championships, Bangalore offers something for everyone. Rquet is proud to be 
            part of this vibrant ecosystem, helping players discover their next great sporting adventure.
          </p>
        </div>
      </div>
    </div>
  );
}