import React from 'react'

import PageNav from '../PageNav/PageNav'

const MainLayout = ({ children }) => {
  return (
    <div>
      <PageNav />
      {children}
    </div>
  )
}

export default MainLayout
