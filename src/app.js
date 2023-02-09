import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getHomeMenuList } from 'Redux/actions'
import { homeMenuListLoading, homeMenuList } from 'Redux/selectors'

import { kebabCase } from 'lodash'

import routes from './routes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeMenuList())
  }, [])

  const authPermissionsLoading = useSelector(homeMenuListLoading)
  const authPermissions = useSelector(homeMenuList)

  const getRoutePermissions = () => {
    const tmp = []
    authPermissions.level1.forEach((mainMenu) => {
      authPermissions.level2.forEach((subMenu) => {
        if (mainMenu.name === subMenu.parent) {
          let hasLevel3 = false

          authPermissions.level3.forEach((menuItem) => {
            if (subMenu.name === menuItem.parent) {
              tmp.push(
                `/${kebabCase(mainMenu.name)}/${kebabCase(subMenu.name)}/${kebabCase(
                  menuItem.name,
                )}`,
              )
              hasLevel3 = true
            }
          })

          if (!hasLevel3) {
            tmp.push(`/${kebabCase(mainMenu.name)}/${kebabCase(subMenu.name)}`)
          }
        }
      })
      // Main menu need page
      tmp.push(`/${kebabCase(mainMenu.name)}`)
    })
  }

  useEffect(() => {
    if (authPermissionsLoading === false && authPermissions) getRoutePermissions()
  }, [authPermissionsLoading, authPermissions])

  return (
    <div>
      <Router>
        {/* <Suspense fallback={<LoadingPage />}> */}
        <Routes>
          {/* <For each="route" of={routes}>
            <If
              condition={includes(routePermissions, route.path) || checkTodoListRoute(route.path)}
            >
              <Route exact key={route.path} path={route.path} component={route.Child} />
            </If>
          </For> */}
          {/* {routes.map((route) => (
            includes(routePermissions, route.path) ?
              <Route exact key={route.path} path={route.path} component={route.Child} />
             : null,
          )} */}
          {
            routes.map((route) => (
              <Route exact key={route.path} path={route.path} component={route.Child} />
            ))
            // includes(routePermissions, route.path) ? (
            // <Route exact key={route.path} path={route.path} component={route.Child} />
            // ) : null,
          }
        </Routes>
        {/* </Suspense> */}
      </Router>
    </div>
  )
}

export default App
