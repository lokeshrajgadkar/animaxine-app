import { createFileRoute } from '@tanstack/react-router'
import VideoPlayer from '../../components/VideoPlayer';

export const Route = createFileRoute('/anime/$episodeId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { episodeId} = Route.useParams();
  return <VideoPlayer episodeId={episodeId} />
}
