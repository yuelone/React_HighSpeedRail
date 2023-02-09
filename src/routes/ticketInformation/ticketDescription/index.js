import { lazy } from 'react'

const ListOfFareProducts = lazy(() => import('Pages/ticketInformation/listOfFareProducts/'))

const ticketDescriptionRoutes = [
  {
    path: '/ticket-description/list-of-fare-products',
    Child: ListOfFareProducts,
  },
]

export default ticketDescriptionRoutes
