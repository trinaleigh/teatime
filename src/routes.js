'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Layout from './components/Layout';
import Main from './components/Main';

const routes = (
		<Route path='/' component={Layout}>
			<IndexRoute component={Main}/>
		</Route>
);

export default routes;