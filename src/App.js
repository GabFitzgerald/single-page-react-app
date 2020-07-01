import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'

const App = () => {
	const categories = ["development", "movies", "philosophy", "other"]
	return (
		<div>
			<BrowserRouter>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/category">Category</Link>
					<Link to="/entry">New Entry</Link>
				</nav>
				<Route exact path="/" component={HomeView} />
				<Route exact path="/category" render={props => <CategorySelectionView {...props} categories={categories} />} />
				<Route exact path="/entry" render={props => <NewEntryView {...props} categories={categories} />} />
				<Route exact path="entry/new/:cat_id" render={props => <NewEntryView {...props} categories={categories} />} />
			</BrowserRouter>
		</div>
	)
}

export default App;
