// ** React Imports
import React, { useState } from 'react'

// ** Utils Imports
import { Each } from 'config/utils/each'

const Tabs = ({ menu, onChange }) => {
	// ! hooks
	// * state
	const [activeTab, setActiveTab] = useState(menu[0])

	return (
		<div className="flex gap-2">
			<Each
				of={menu}
				render={(tab) => (
					<p
						key={tab}
						onClick={() => {
							setActiveTab(tab)
							if (onChange) onChange(tab)
						}}
						className={`p-2 rounded-md cursor-pointer transition-all duration-200
							${
								activeTab === tab
									? 'bg-slate-600/20 backdrop-blur-lg text-white'
									: 'hover:bg-slate-600/20 hover:backdrop-blur-lg hover:text-white'
							}
						`}>
						{tab}
					</p>
				)}
			/>
		</div>
	)
}

export default Tabs
