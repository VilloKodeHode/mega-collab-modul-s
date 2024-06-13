'use client'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Masonry } from 'react-plock'
import { LoadingSpinner } from './Components/LoadingSpinner/LoadingSpinner'
import { useFetch } from './hooks/useFetch'
import './inna.css'

export default function Home() {
	const [currentImages, setCurrentImages] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [imagesOffset, setImagesOffset] = useState(0)
	const imgOnPage = 6

	const { data, error, isLoading } = useFetch(
		`https://api.unsplash.com/photos/?client_id=SIQfDKJYnbp4Shm0UYYvK4f7MWoVz8eH2bucTgAvdU4&per_page=30`
	)

	useEffect(() => {
		const endOffset = imagesOffset + imgOnPage
		setCurrentImages(data.slice(imagesOffset, endOffset))
		setPageCount(Math.ceil(data.length / imgOnPage))
	}, [data, imagesOffset])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * imgOnPage) % data.length
		setImagesOffset(newOffset)
	}

	/* ------------------------- Component ImagesMasonry ------------------------ */
	const ImagesMasonry = () => {
		return (
			<Masonry
				items={currentImages}
				config={{
					columns: [1, 2, 3],
					gap: [24, 12, 6],
					media: [640, 768, 1024],
				}}
				render={(item, idx) => (
					// <Image
					// 	key={idx}
					// 	src={item.urls.thumb}
					// 	width={item.width}
					// 	height={item.height}
					// 	alt={item.alt_description}
					//  title={item.description}
					// />

					<a href={item.links.html} target='_blank'>
						<img
							key={item.id}
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
			<div className='w-full'>
				{isLoading ? (
					// 'Loading data'
					<LoadingSpinner />
				) : (
					<section>
						{error ? (
							'failed fetching data'
						) : !currentImages ? (
							'Kunne ikke hente database from API'
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
