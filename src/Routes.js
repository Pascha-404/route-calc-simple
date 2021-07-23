import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={routeProps => <Calculator {...routeProps} />}></Route>
				<Route
					exact
					path='/:operator/:firstNum/:secondNum'
					render={routeProps => <Calculator {...routeProps} />}></Route>
			</Switch>
		);
	}
}

export default Routes;
