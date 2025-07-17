# Rquet - Bangalore Racquet Sports Tournaments

A sleek, responsive, frontend-only website to display racket sports tournaments happening in Bangalore.

## Features

- **Homepage** with hero section and featured tournaments
- **Tournament Listings** with filters and sorting
- **Tournament Details** with Google Maps integration
- **Responsive Design** for mobile, tablet, and desktop
- **Dark/Light Mode** toggle
- **Static Pages** (About, Contact, Privacy, Terms)
- **SEO Optimized** with proper meta tags

## Sports Covered

- 🏸 Badminton
- 🎾 Squash
- 🎾 Tennis
- 🏓 Table Tennis

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages
- **Data**: Static JSON files

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rquet

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
# Build the application
npm run build

# The static files will be generated in the 'out' directory
```

## Deployment to Cloudflare Pages

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Create a new project
   - Upload the contents of the `out` directory
   - Set custom domain to `rquet.com`

3. **Configure Custom Domain**:
   - In Cloudflare Pages dashboard, go to Custom Domains
   - Add `rquet.com` and `www.rquet.com`
   - Update DNS records as instructed

## Project Structure

```
rquet/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── tournaments/        # Tournament pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy policy
│   │   └── terms/             # Terms of service
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── TournamentCard.tsx # Tournament card component
│   │   └── ThemeToggle.tsx    # Dark/light mode toggle
│   ├── data/                  # Static data
│   │   └── tournaments.json   # Tournament data
│   ├── lib/                   # Utility functions
│   │   └── tournaments.ts     # Tournament helpers
│   └── types/                 # TypeScript types
│       └── tournament.ts      # Tournament type definitions
├── public/                    # Static assets
│   ├── logo.svg              # Rquet logo
│   └── favicon.ico           # Site favicon
├── _headers                   # Cloudflare security headers
├── _redirects                 # Cloudflare redirects
└── next.config.ts             # Next.js configuration
```

## Adding Tournaments

To add new tournaments, edit the `src/data/tournaments.json` file:

```json
{
  "id": "unique-id",
  "title": "Tournament Name",
  "description": "Tournament description",
  "sport": "badminton|squash|tennis|table-tennis",
  "date": "2024-08-15",
  "time": "09:00",
  "venue": {
    "name": "Venue Name",
    "address": "Full Address",
    "googleMapsUrl": "https://maps.google.com/..."
  },
  "organizer": {
    "name": "Organizer Name",
    "contact": "+91 80 1234 5678",
    "email": "email@example.com"
  },
  "registrationUrl": "https://registration-link.com",
  "isFeatured": true,
  "createdAt": "2024-07-01T10:00:00Z"
}
```

## Features to Implement

Future enhancements could include:
- User authentication
- Tournament registration system
- Admin panel for managing tournaments
- Real-time updates
- Email notifications
- Payment integration
- Advanced search and filtering
- Tournament results and statistics

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact:
- Email: info@rquet.com
- Phone: +91 80 1234 5678
- Website: https://rquet.com

---

Made with ❤️ in Bangalore, India
