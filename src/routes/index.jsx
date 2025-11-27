import { createFileRoute } from '@tanstack/react-router'
import TopAnimeList from '../components/TopAnimeList'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <TopAnimeList />
  </div>
  )
}
