// ** React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'

// ** Store Imports
// import { store } from './config/store'

// ** App Imports
import App from './App'

// ** Styles Imports
import './index.css'

// ** Others Imports
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <Provider store={store}>
	<Router>
		<App />
	</Router>
	// </Provider>
)

reportWebVitals()
