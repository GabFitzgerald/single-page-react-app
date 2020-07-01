import React from 'react'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'

const App = () => {
	return (
		<div>
			<HomeView />
			<CategorySelectionView />
			<NewEntryView />
		</div>
	)
}

export default App;
