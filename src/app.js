import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getHomeMenuList } from 'Redux/actions'
// import { homeMenuListLoading, homeMenuList } from 'Redux/selectors'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeMenuList())
  }, [])

  return (
    <>
      <div>start</div>
      <div>test</div>
    </>
  )
}

export default App
