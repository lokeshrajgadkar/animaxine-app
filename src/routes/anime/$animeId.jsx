import { createFileRoute } from '@tanstack/react-router'
import AnimeInfo from '../../components/AnimeInfo';

export const Route = createFileRoute('/anime/$animeId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { animeId } = Route.useParams();
  return <AnimeInfo animeId={animeId}/>
}
