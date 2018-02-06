import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/add-item' component={AddItem} />
			<Route path='/index' component={IndexItem} />
			<Route path='/edit/:id' component={EditItem} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
