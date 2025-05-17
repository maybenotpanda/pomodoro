// ** React Imports
import React from 'react'

// ** Route Imports
import Route from './config/routes/route'

// ** Hooks Imports
import { useScrollToTop } from 'config/hooks/scroll-to-top'

const App = () => {
	useScrollToTop()
	return <Route />
}
export default App
