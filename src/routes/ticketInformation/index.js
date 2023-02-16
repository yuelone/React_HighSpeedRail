// import { lazy } from 'react'
import ticketDescriptionRoutes from './ticketDescription'

const currentRoute = '/ticket-information'
// const TicketInformation = lazy(() => import('Pages/ticketInformation/'))

const ticketInformationRoutes = [
  ...[...ticketDescriptionRoutes].map((page) => ({
    path: `${currentRoute}${page.path}`,
    Element: page.Element
  }))
  //   {
  //     path: currentRoute,
  //     Element: TicketInformation,
  //   },
]

export default ticketInformationRoutes
