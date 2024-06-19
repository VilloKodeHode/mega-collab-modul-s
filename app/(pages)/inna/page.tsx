'use client'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Masonry } from 'react-plock'

import './inna.css'
import Image from 'next/image'
import { LoadingSpinner } from '@/app/components/base/atom/loadingSpinner/LoadingSpinner'

interface UnsplashPhoto {
	urls: {
		small: string
	}
	links: {
		html: string
	}
	alt_description: string
	description: string
}

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const [initialData, setInitialData] = useState<UnsplashPhoto[] | null>(null)
	const [currentImages, setCurrentImages] = useState<UnsplashPhoto[] | null>(
		null
	)
	const [pageCount, setPageCount] = useState<number>(0)
	const [imagesOffset, setImagesOffset] = useState<number>(0)
	const imgOnPage: number = 15

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://api.unsplash.com/collections/58259181/photos?client_id=SIQfDKJYnbp4Shm0UYYvK4f7MWoVz8eH2bucTgAvdU4&per_page=30`
				)
				if (!res.ok) {
					throw new Error('Failed to fetch data')
				}
				const data: UnsplashPhoto[] = await res.json()
				setInitialData(data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
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

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * imgOnPage) % (initialData?.length || 0)
		setImagesOffset(newOffset)
	}

	const ImagesMasonry: React.FC = () => {
		return (
			<Masonry
				items={currentImages || []}
				config={{
					columns: [1, 2, 3, 4],
					gap: [24, 12, 8, 6],
					media: [640, 768, 1024, 1280],
				}}
				render={(item: UnsplashPhoto, idx: number) => (
					<a
						href={item.links.html}
						target='_blank'
						rel='noopener noreferrer'
						key={idx}>
						<Image
						width={500}
						height={500}	
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

export default Home
