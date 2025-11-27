import { createFileRoute } from '@tanstack/react-router'
import SpotlightAni from '../components/SpotlightAni'

export const Route = createFileRoute('/spotlightAnime')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SpotlightAni />
}
