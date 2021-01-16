import React from 'react';
import { Route } from 'react-router-dom';

// custom modules
import './RouterView.css';
import HomeView from '../../views/Home';

const Index = (props) => {
  return (
    <div className="RouterView">
    	<Route to="/" exact component={HomeView}/>
    </div>
  )
}

export default Index;