import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Router extends Component {
  render(){
    return(
      <div>
        <h3 className="link"><Link to='/'>Home</Link></h3>
				{' '}
				<h3 className="link"><Link to='/index'>Data List</Link></h3>
      </div>
    );
  }
}

export default Router;
