import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Import items from react-router-dom, BROWSER ROUTER interacts w/ History library and decides waht to do based on URL. Tells router to look at entire URL depending on components on screen.
//ROUTE work horse of react-router, provides config that says if URL looks like x show x component.  Provides customization to React Router

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// import App from './components/app';
import reducers from './reducers';

//import code index
import Home from './components/home';
//import code index
import Code from './components/code';
//import blog index
import Blog from './components/blog';
//import contact index
import Contact from './components/contact';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	   <BrowserRouter>
	   		<div>
	   			
	   			<Switch>
			   		<Route path ="/blog" component={Blog} />
			   		<Route path="/code" component={Code} />
			   		<Route path="/contact" component={Contact} />
			   		<Route path ="/" component={Home} />
			   	
			   	</Switch>

	   		</div>	
	   </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));