import { 
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import { Dashboard, Reports, Settings } from './components'
import Report from './components/Report'

function App() {
  return (
    <Router>
			<Switch>
				<Route exact path='/reports/:id' component={ Report }/>
				<Route exact path='/reports' component={ Reports }/>
				<Route exact path='/settings' component={ Settings }/>
				<Route exact path='/' component={ Dashboard }/>
			</Switch>
		</Router>
  );
}

export default App;
