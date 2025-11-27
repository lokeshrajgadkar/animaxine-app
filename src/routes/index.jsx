import { createFileRoute } from '@tanstack/react-router'
import SpotlightAni from '../components/SpotlightAni'
import Banner from '../components/Banner'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <Banner />
    <SpotlightAni />
  </div>
  )
}
