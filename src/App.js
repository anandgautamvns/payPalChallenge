import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Reman from './component/Reman';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
			<Switch>
				<Route exact path="/" component={Reman} />
			</Switch>
		</div>
  );
}

export default App;
