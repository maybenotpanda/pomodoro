// ** React Imports
import React, { useEffect, useRef, useState } from 'react'

// ** Utils Imports
import { formatTime } from 'config/utils/date-time'

// ** Elements Imports
import Tabs from 'components/elements/tabs'
import Button from 'components/elements/button'

// ** Assets Imports
import Sound from 'assets/sound.mp3'

const HomeFrame = () => {
	// ! hooks
	// * state
	const [isRunning, setIsRunning] = useState(false)
	const [activeTab, setActiveTab] = useState('Pomodoro')
	const [timeLeft, setTimeLeft] = useState(45 * 60)

	// * ref
	const endSoundRef = useRef(null)
	const intervalRef = useRef(null)
	const endTimeRef = useRef(null)

	// * effect
	useEffect(() => {
		if (isRunning) {
			document.title = `⏳ ${formatTime(timeLeft)} - ${activeTab === 'Pomodoro' ? 'Time to focus!' : activeTab}`
			endTimeRef.current = Date.now() + timeLeft * 1000

			intervalRef.current = setInterval(() => {
				const now = Date.now()
				const diff = Math.round((endTimeRef.current - now) / 1000)

				if (diff <= 0) {
					clearInterval(intervalRef.current)
					setIsRunning(false)

					let nextTab = 'Pomodoro'
					if (activeTab === 'Pomodoro') nextTab = 'Short Break'
					else nextTab = 'Pomodoro'

					setActiveTab(nextTab)
					setTimeLeft(getDuration(nextTab))

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

		return () => {
			clearInterval(intervalRef.current)
			document.title = 'Panda'
		}
	}, [isRunning, timeLeft, activeTab])

	// ! handle
	const handleTabChange = (tab) => {
		setIsRunning(false)
		clearInterval(intervalRef.current)

		if (endSoundRef.current) {
			endSoundRef.current.pause()
			endSoundRef.current.currentTime = 0
		}

		setActiveTab(tab)
		setTimeLeft(getDuration(tab))
	}

	const handleClick = () => {
		if (endSoundRef.current) {
			endSoundRef.current.pause()
			endSoundRef.current.currentTime = 0
		}

		setIsRunning((prev) => !prev)
	}

	// ! others
	const tabs = ['Pomodoro', 'Short Break', 'Long Break']

	const getDuration = (tab) => {
		switch (tab) {
			case 'Pomodoro':
				return 45 * 60
			case 'Short Break':
				return 5 * 60
			case 'Long Break':
				return 15 * 60
			default:
				return 0
		}
	}

	return (
		<div className="h-screen w-screen grid justify-items-center content-center gap-6 py-6 bg-primary">
			<h2 className="text-white text-center">Make your time</h2>
			<div className="py-4 px-8 bg-slate-600/10 rounded-md backdrop-blur-md grid justify-items-center content-center gap-6">
				<Tabs menu={tabs} activeTab={activeTab} onChange={handleTabChange} />
				<div className="text-8xl font-medium text-white">{formatTime(timeLeft)}</div>
				<Button onClick={handleClick} shadow={isRunning}>
					{isRunning ? 'Pause' : 'Start'}
				</Button>
				<audio ref={endSoundRef} src={Sound} preload="auto" />
			</div>
		</div>
	)
}

export default HomeFrame
