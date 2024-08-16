'use client';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules'; // Swiper v6 이상의 경우
import 'swiper/css';
import 'swiper/css/pagination';
import { UNION_STR } from '@/src/components/util/UNION_STR';
import Image from 'next/image';

export default function MainSlider() {
	SwiperCore.use([Navigation, Scrollbar]);
	useRef<SwiperCore>();

	const [sliderItemEq, setSliderItemEq] = useState<number>(2);

	useEffect(() => {
		const resizeViewportWidth = () => {
			console.log(window.innerWidth);

			if (window.innerWidth < 1280 && sliderItemEq === 2) {
				setSliderItemEq(1);
			} else if (window.innerWidth >= 1280 && sliderItemEq === 1) {
				console.log('도달??');
				setSliderItemEq(2);
			}
		};

		window.addEventListener('resize', resizeViewportWidth);
	}, [sliderItemEq]);

	return (
		<Swiper
			slidesPerView={sliderItemEq}
			spaceBetween={20}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
			<SwiperSlide style={{ display: 'flex' }}>
				<span className={`
					ring-offset-background
					focus-visible:ring-ring
					data-[state=active]:bg-primary
					inline-flex items-center justify-center whitespace-nowrap rounded-full
					bg-blue-600 px-3 py-1.5 text-sm font-medium text-black transition-all
					focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
					disabled:pointer-events-none disabled:opacity-50
					data-[state=active]:shadow-sm
					lg:w-auto
				`}
				>
					{UNION_STR.project.login.nm}asd
				</span>
				<Image
					alt={UNION_STR.project.login.nm}
					width="200"
					height="120"
					decoding="async"
					data-nimg="1"
					style={{ marginTop: '10px' }}
					src={UNION_STR.project.login.imgSrc}
				/>
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex' }}>
				<span
					className={`
						ring-offset-background
						focus-visible:ring-ring
						data-[state=active]:bg-primary
						inline-flex items-center justify-center whitespace-nowrap rounded-full
						bg-blue-600 px-3 py-1.5 text-sm font-medium text-black transition-all
						focus-visible:outline-none focus-visible:ring-2
						focus-visible:ring-offset-2
						disabled:pointer-events-none disabled:opacity-50
						data-[state=active]:shadow-sm
						lg:w-auto
					`}
				>
					{UNION_STR.project.mouse.nm}
				</span>
				<Image
					alt={UNION_STR.project.mouse.nm}
					width="200"
					height="120"
					decoding="async"
					data-nimg="1"
					src={UNION_STR.project.mouse.imgSrc}
					style={{ marginTop: '10px' }}
				/>
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex' }}>
				<span
					className={`
						ring-offset-background
						focus-visible:ring-ring
						data-[state=active]:bg-primary
						inline-flex items-center justify-center whitespace-nowrap rounded-full
						bg-blue-600 px-3 py-1.5 text-sm font-medium text-black transition-all
						focus-visible:outline-none focus-visible:ring-2
						focus-visible:ring-offset-2
						disabled:pointer-events-none disabled:opacity-50
						data-[state=active]:shadow-sm
						lg:w-auto
					`}
				>
					{UNION_STR.project.uics.nm}
				</span>
				<Image
					alt={UNION_STR.project.uics.nm}
					width="200"
					height="120"
					decoding="async"
					data-nimg="1"
					src={UNION_STR.project.uics.imgSrc}
					style={{ marginTop: '10px' }}
				/>
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex' }}>
				<span
					className={`
						ring-offset-background
						focus-visible:ring-ring
						data-[state=active]:bg-primary
						inline-flex items-center justify-center whitespace-nowrap rounded-full
						bg-blue-600 px-3 py-1.5 text-sm font-medium text-black transition-all
						focus-visible:outline-none focus-visible:ring-2
						focus-visible:ring-offset-2
						disabled:pointer-events-none disabled:opacity-50
						data-[state=active]:shadow-sm
						lg:w-auto
					`}
				>
					{UNION_STR.project.portfolio.nm}
				</span>
				<Image
					alt={UNION_STR.project.portfolio.nm}
					width="200"
					height="120"
					decoding="async"
					data-nimg="1"
					src={UNION_STR.project.portfolio.imgSrc}
				/>
			</SwiperSlide>

			<SwiperSlide style={{ display: 'flex' }}>
				<span
					className={`
						ring-offset-background
						focus-visible:ring-ring
						data-[state=active]:bg-primary
						inline-flex items-center justify-center whitespace-nowrap rounded-full
						bg-blue-600 px-3 py-1.5 text-sm font-medium text-black transition-all
						focus-visible:outline-none focus-visible:ring-2
						focus-visible:ring-offset-2
						disabled:pointer-events-none disabled:opacity-50
						data-[state=active]:shadow-sm
						lg:w-auto
					`}
				>
					{UNION_STR.project.autoAd.nm}
				</span>
				<Image
					alt={UNION_STR.project.autoAd.nm}
					width="200"
					height="120"
					decoding="async"
					data-nimg="1"
					style={{ marginTop: '10px' }}
					src={UNION_STR.project.autoAd.imgSrc}
				/>
			</SwiperSlide>
			<SwiperSlide style={{ display: 'flex' }}>
				<span
					className={`
						ring-offset-background
						focus-visible:ring-ring
						data-[state=active]:bg-primary
						inline-flex items-center justify-center whitespace-nowrap rounded-full
						bg-blue-600 px-3 py-1.5 text-sm font-medium text-black transition-all
						focus-visible:outline-none focus-visible:ring-2
						focus-visible:ring-offset-2
						disabled:pointer-events-none disabled:opacity-50
						data-[state=active]:shadow-sm
						lg:w-auto
					`}
				>
					{UNION_STR.project.vpn.nm}
				</span>
				<Image
					alt={UNION_STR.project.vpn.nm}
					width="200"
					height="120"
					decoding="async"
					data-nimg="1"
					style={{ marginTop: '10px' }}
					src={UNION_STR.project.vpn.imgSrc}
				/>
			</SwiperSlide>
		</Swiper>
	);
}
