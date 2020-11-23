import React, { Fragment, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navigation = ({ history }) => {

	const reportIdInputRef = useRef(null)

  return (
    <Fragment>

			<input 
				type='text'
				placeholder='Set the report id'
				ref={ reportIdInputRef }
			/>
			<button
				onClick={ () => history.push(`/reports/${reportIdInputRef.current.value}`) }
				>Go To Report
			</button>

			<button
				onClick={ () => history.goBack() }
				>Go Back
			</button>

			<button
				onClick={ () => history.goForward() }
				>Go Forward
			</button>

      <ul>
				<li>
					<Link to='/'>Dashboard</Link>
				</li>
				<li>
					<Link to='/reports'>Reports</Link>
				</li>
				<li>
					<Link to='/settings'>Settings</Link>
				</li>
				<li>
					<Link to='/reports/:id'>Report</Link>
				</li>
			</ul>
    </Fragment>
  )
}

export default withRouter(Navigation)