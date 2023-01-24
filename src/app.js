import React from 'react'

function test() {
  console.log('444', 444)
}

const App = () => {
  console.log('123', 123)
  test()
  return (
    <>
      <div>start</div>
      <div>test</div>
    </>
  )
}

export default App
