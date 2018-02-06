import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Router from './Router';

class IndexItem extends Component {
	constructor(props){
	  super(props);

	  this.state = {
			value: '',
			items: ''
		};
	}
	componentDidMount() {
		axios.get('http://localhost:4200/items')
			.then(response => {
				this.setState({ items: response.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	tabRow() {
		if(this.state.items instanceof Array) {
			return this.state.items.map((obj, i) => {
				return <TableRow obj={obj} key={i} />
			})
		}
	}
  render(){
    return(
      <div className="App">
				<h2>Welcome to the React Mern App</h2>
				{' '}
				<Router />
				{' '}
				{this.tabRow()}
      </div>
    );
  }
}

export default IndexItem;
