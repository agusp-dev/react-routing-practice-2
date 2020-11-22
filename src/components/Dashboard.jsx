import React, { Fragment } from 'react'
import { Navigation } from '.'

const Dashboard = () => {
  return (
    <Fragment>
      <h1 style={{ color: 'green' }}>Dashboard</h1>
      <Navigation />
    </Fragment>
  )
}

export { Dashboard }