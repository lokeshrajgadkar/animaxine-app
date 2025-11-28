import { createFileRoute } from '@tanstack/react-router'
import VideoPlayer from '../../components/VideoPlayer';

export const Route = createFileRoute('/episode/$episodeId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { episodeId, animeSources} = Route.useParams();
  return <VideoPlayer episodeId={episodeId} animeSources={animeSources}/>
}
