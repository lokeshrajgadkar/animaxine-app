import { createFileRoute } from '@tanstack/react-router'
import TopAnimeList from '../components/TopAnimeList'

export const Route = createFileRoute('/topAnime')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TopAnimeList />
}
