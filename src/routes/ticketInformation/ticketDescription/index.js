import React, { lazy } from 'react'

const ListOfFareProducts = lazy(() => import('Pages/ticketInformation/listOfFareProducts/'))

const ticketDescriptionRoutes = [
  {
    path: '/ticket-description/list-of-fare-products',
    Element: <ListOfFareProducts />,
  },
]

export default ticketDescriptionRoutes
