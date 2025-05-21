// ** React Imports
import React, { useState } from 'react'

const Tabs = ({ menu }) => {
	// ! hooks
	// * state
	const [activeTab, setActiveTab] = useState(menu[0])

	return (
		<div className="flex gap-2">
			{menu.map((tab) => (
				<p
					key={tab}
					onClick={() => setActiveTab(tab)}
					className={`p-2 rounded-md cursor-pointer transition-all duration-200
								${
									activeTab === tab
										? 'bg-slate-600/20 backdrop-blur-lg text-white' // font-medium
										: 'hover:bg-slate-600/20 hover:backdrop-blur-lg hover:text-white' // hover:font-medium
								}
          `}>
					{tab}
				</p>
			))}
		</div>
	)
}

export default Tabs
