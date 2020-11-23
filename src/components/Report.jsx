import React, { Fragment } from 'react'
import Navigation from './Navigation'
import { withRouter } from 'react-router-dom' 

const Report = ({ location, match }) => {

	const { id } = match.params

	return (
		<Fragment>
      <h1 style={{ color: 'yellow' }}>{ `Report ${ id }` }</h1>
      <Navigation />
    </Fragment>
	)
}

export default withRouter( Report )
