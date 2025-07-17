import { notFound } from 'next/navigation';
import { getTournamentById, getAllTournaments } from '@/lib/tournaments';
import { Metadata } from 'next';
import TournamentDetail from '@/components/TournamentDetail';

interface TournamentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const tournaments = getAllTournaments();
  return tournaments.map((tournament) => ({
    id: tournament.id,
  }));
}

export async function generateMetadata({ params }: TournamentDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const tournament = getTournamentById(id);
  
  if (!tournament) {
    return {
      title: 'Tournament Not Found - Rquet',
      description: 'The requested tournament could not be found.'
    };
  }

  return {
    title: `${tournament.title} - Rquet`,
    description: tournament.description,
    openGraph: {
      title: tournament.title,
      description: tournament.description,
      url: `https://rquet.com/tournaments/${tournament.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: tournament.title,
      description: tournament.description,
    },
  };
}

export default async function TournamentDetailPage({ params }: TournamentDetailPageProps) {
  const { id } = await params;
  const tournament = getTournamentById(id);

  if (!tournament) {
    notFound();
  }

  return <TournamentDetail tournament={tournament} />;
}