import { useEffect, useState } from 'react'

export function useFetch(value) {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const isLoading = data === null && error === null

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(value)
				const arr = await response.json()
				setData(arr)
				//console.log(arr)
			} catch (error) {
				setError(error)
			}
		}
		setTimeout(fetchData, 2000)
	}, [value])
	console.log(data)
	return {
		data,
		error,
		isLoading,
	}
}
