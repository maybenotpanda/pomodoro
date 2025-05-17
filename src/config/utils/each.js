// ** React Imports
import { Children } from 'react'

export const Each = ({ render, of }) => {
	return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>
}

/**
 * <Each of={categoryItems} render={item => ....} />
 */

