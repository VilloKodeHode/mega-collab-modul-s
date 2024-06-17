'use client'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Masonry } from 'react-plock'
import { LoadingSpinner } from './Components/LoadingSpinner/LoadingSpinner'
import './inna.css'

export default function Home() {
	const [initialData, setInitialData] = useState(null)
	const [currentImages, setCurrentImages] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [imagesOffset, setImagesOffset] = useState(0)
	const imgOnPage = 15

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`https://api.unsplash.com/collections/58259181/photos?client_id=SIQfDKJYnbp4Shm0UYYvK4f7MWoVz8eH2bucTgAvdU4&per_page=30`
			)
			if (!res.ok) {
				throw new Error('Failed to fetch data')
			}
			const data = await res.json()
			setInitialData(data)
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (initialData) {
			const endOffset = imagesOffset + imgOnPage
			setCurrentImages(initialData.slice(imagesOffset, endOffset))
			setPageCount(Math.ceil(initialData.length / imgOnPage))
		}
	}, [initialData, imagesOffset])

	const handlePageClick = event => {
		const newOffset = (event.selected * imgOnPage) % initialData.length
		setImagesOffset(newOffset)
	}

	/* ------------------------- Component ImagesMasonry ------------------------ */
	const ImagesMasonry = () => {
		return (
			<Masonry
				items={currentImages}
				config={{
					columns: [1, 2, 3, 4],
					gap: [24, 12, 8, 6],
					media: [640, 768, 1024, 1280],
				}}
				render={(item, idx) => (
					<a
						href={item.links.html}
						target='_blank'
						rel='noopener noreferrer'
						key={idx}>
						<img
							src={item.urls.small}
							style={{ width: '100%', height: 'auto' }}
							alt={item.alt_description}
							title={item.description}
						/>
					</a>
				)}
			/>
		)
	}

	type MasonryProps<T> = React.ComponentPropsWithoutRef<'div'> & {
		items: T[]
		render: (item: T, idx: number) => React.ReactNode
		config: {
			columns: number | number[]
			gap: number | number[]
			media?: number[]
		}
	}

	/* -------------------------------------------------------------------------- */

	return (
		<>
			<h1 className='text-3xl font-bold text-h1'>Gallery</h1>
			<div className='w-full text-center'>
				{!initialData ? (
					<LoadingSpinner />
				) : (
					<section>
						{!currentImages ? (
							'Kunne ikke hente data from API'
						) : (
							<>
								<div className='galleryWrap rounded-xl'>
									<ImagesMasonry />
								</div>
								<div className='pagination'>
									<ReactPaginate
										breakLabel='...'
										nextLabel='>'
										onPageChange={handlePageClick}
										pageRangeDisplayed={2}
										pageCount={pageCount}
										previousLabel='<'
										containerClassName={'pagination'}
										activeClassName={'active'}
									/>
								</div>
							</>
						)}
					</section>
				)}
			</div>
		</>
	)
}
