import React, { useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeMenuList } from 'Redux/actions'
import { homeMenuListLoading } from 'Redux/selectors'

import LoadingPage from 'Components/LoadingPage'
import PageMenu from 'Components/Menu'

import routes from './routes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeMenuList())
  }, [])

  const menuListLoading = useSelector(homeMenuListLoading)

  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          {menuListLoading === false ? <PageMenu /> : null}
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.Element} />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
