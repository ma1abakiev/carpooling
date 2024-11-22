import Head from 'next/head'
import Script from 'next/script'

import { FC, useEffect, useState } from 'react'

import FavIcon from '../../assets/images/preloader.png'
import Loader from '../ui/Loader'

interface ILayout {
	title: string
}

const Layout: FC<ILayout> = ({ children, title }) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 4000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div>
			<Head>
				<title>{title} | Yandex Taxi</title>
				<meta name='description' content='Taxi app' />
				<link rel='shortcut icon' href={FavIcon.src} type='image/png' />

				<meta name='theme-color' content='#ffbc00' />
				<meta name='msapplication-navbutton-color' content='#ffbc00' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#ffbc00' />
			</Head>

			<Script
				strategy='beforeInteractive'
				src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
			/>

			<div
				style={{ maxWidth: 480 }}
				className='mx-auto relative overflow-hidden'
			>
				{isLoading ? <Loader /> : children}
			</div>
		</div>
	)
}

export default Layout
