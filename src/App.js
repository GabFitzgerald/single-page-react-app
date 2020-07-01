import React, { useState, useEffect } from 'react'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'

const App = () => {
	const [page, setPage] = useState("home")

	return (
		<div>
			<nav>
				<button onClick ={() => setPage("home")}>Home</button>
				<button onClick ={() => setPage("category")}>Category</button>
				<button onClick ={() => setPage("newEntry")}>New Entry</button>
			</nav>
			{page == "home" && <HomeView />}
			{page == "category" && <CategorySelectionView />}
			{page == "newEntry" && <NewEntryView />}
		</div>
	)
}

export default App;
