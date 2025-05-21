// ** React Imports
import React, { useEffect, useRef, useState } from 'react'

// ** Assets Imports
import endSound from 'assets/pomodoro.mp3'

const HomeFrame = () => {
	const [isRunning, setIsRunning] = useState(false)
	const [timeLeft, setTimeLeft] = useState(45 * 60)
	const [activeTab, setActiveTab] = useState('Pomodoro')

	const clickSoundRef = useRef(null)
	const endSoundRef = useRef(null)
	const intervalRef = useRef(null)
	const endTimeRef = useRef(null)

	const tabs = ['Pomodoro', 'Short Break', 'Long Break']

	const formatTime = (seconds) => {
		const m = Math.floor(seconds / 60)
		const s = seconds % 60
		return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
	}

	useEffect(() => {
		if (isRunning) {
			endTimeRef.current = Date.now() + timeLeft * 1000

			intervalRef.current = setInterval(() => {
				const now = Date.now()
				const diff = Math.round((endTimeRef.current - now) / 1000)

				if (diff <= 0) {
					clearInterval(intervalRef.current)
					setTimeLeft(45 * 60)
					setIsRunning(false)
					if (endSoundRef.current) {
						endSoundRef.current.currentTime = 0
						endSoundRef.current.play()
					}
				} else {
					setTimeLeft(diff)
				}
			}, 1000)
		} else {
			clearInterval(intervalRef.current)
		}

		return () => clearInterval(intervalRef.current)
	}, [isRunning, timeLeft])

	return (
		<div className="h-screen w-screen grid justify-items-center content-center gap-6 py-6 bg-primary">
			<h2 className="text-white text-center">Make your time</h2>
			<div className="py-4 px-8 bg-slate-600/10 rounded-md backdrop-blur-md grid justify-items-center content-center gap-6">
				<div className="flex gap-2">
					{tabs.map((tab) => (
						<p
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`p-2 rounded-md cursor-pointer transition-all duration-200
								${
									activeTab === tab
										? 'bg-slate-600/20 backdrop-blur-lg text-white font-medium'
										: 'hover:bg-slate-600/20 hover:backdrop-blur-lg hover:text-white hover:font-medium'
								}
          `}>
							{tab}
						</p>
					))}
				</div>
				<div className="text-8xl font-medium text-white">{formatTime(timeLeft)}</div>
				<Button onClick={handleClick} shadow={isRunning}>
					{isRunning ? 'Pause' : 'Start'}
				</Button>
				<audio ref={endSoundRef} src={endSound} preload="auto" />
			</div>
		</div>
	)
}

export default HomeFrame
