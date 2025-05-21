// ** React Imports
import React, { useEffect, useRef, useState } from 'react'

// ** Utils Imports
import { formatTime } from 'config/utils/date-time'

// ** Elements Imports
import Tabs from 'components/elements/tabs'
import Button from 'components/elements/button'

// ** Assets Imports
import endSound from 'assets/pomodoro.mp3'

const HomeFrame = () => {
	const [isRunning, setIsRunning] = useState(false)
	const [timeLeft, setTimeLeft] = useState(1 * 60)

	const endSoundRef = useRef(null)
	const intervalRef = useRef(null)
	const endTimeRef = useRef(null)

	const tabs = ['Pomodoro', 'Short Break', 'Long Break']

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

	const handleTabChange = (tab) => {
		setIsRunning(false) // stop timer saat pindah tab
		clearInterval(intervalRef.current)

		if (endSoundRef.current) {
			endSoundRef.current.pause()
			endSoundRef.current.currentTime = 0
		}

		if (tab === 'Pomodoro') setTimeLeft(1 * 60)
		else if (tab === 'Short Break') setTimeLeft(2 * 60)
		else if (tab === 'Long Break') setTimeLeft(3 * 60)
	}

	const handleClick = () => {
		if (endSoundRef.current) {
			endSoundRef.current.pause()
			endSoundRef.current.currentTime = 0
		}

		setIsRunning((prev) => !prev)
	}

	return (
		<div className="h-screen w-screen grid justify-items-center content-center gap-6 py-6 bg-primary">
			<h2 className="text-white text-center">Make your time</h2>
			<div className="py-4 px-8 bg-slate-600/10 rounded-md backdrop-blur-md grid justify-items-center content-center gap-6">
				<Tabs menu={tabs} onChange={handleTabChange} />
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
