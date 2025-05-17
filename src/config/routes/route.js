// ** React Imports
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// ** Pages Imports
import HomePage from 'pages/home'
import Page404 from 'pages/404'

// ** Sub-Route Imports

const RoutePage = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}

export default RoutePage
