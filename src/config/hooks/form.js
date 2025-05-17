// ** React imports
import { useState } from 'react'

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState)

  const handleState = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return { state, handleState }
}

/*

cara penggunaannya seperti dibawah ini
const { state: payload, handleState } = useForm({ name: '' })

*/
