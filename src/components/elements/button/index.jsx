// ** React Imports
import React, { useRef } from 'react'

// ** Assets Imports
import sound from 'assets/click.mp3'

const Button = ({ children, onClick, shadow }) => {
	const clickSoundRef = useRef(null)

	const handleClick = () => {
		// Play click sound
		if (clickSoundRef.current) {
			clickSoundRef.current.currentTime = 0
			clickSoundRef.current.play()
		}

		// Trigger parent function
		if (typeof onClick === 'function') {
			onClick()
		}
	}

	return (
		<>
			<button
				onClick={handleClick}
				className={`bg-white w-40 relative py-2 rounded-md transition-all duration-150 ease-in-out
						${
							shadow
								? 'shadow-none active:translate-y-[6px]'
								: 'shadow-[rgb(235,235,235)_0px_6px_0px] active:shadow-none active:translate-y-[6px] hover:translate-y-[6px] hover:shadow-none'
						}
          `}>
				<h5 className="text-primary">{children}</h5>
			</button>
			<audio ref={clickSoundRef} src={sound} preload="auto" />
		</>
	)
}

export default Button
