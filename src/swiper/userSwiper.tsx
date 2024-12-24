'use client';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PJ_MAP, ProjectType } from '@/src/model/UNION_STR';
import Image from 'next/image';

export default function MainSlider() {
	SwiperCore.use([Navigation, Scrollbar]);
	useRef<SwiperCore>();

	const breakpoints = {
		640: { slidesPerView: 1, spaceBetween: 10 },
		768: { slidesPerView: 2, spaceBetween: 20 },
	};
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={20}
			breakpoints={breakpoints}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className={'mySwiper rounded-3xl  border-2'}
		>
			{Object.entries(PJ_MAP).map(([key, value]) => {
				const pj = value as ProjectType;
				return (
					<SwiperSlide style={{ display: 'flex' }} key={key}>
						<div>
							<span
								className={`
									ring-offset-background
									focus-visible:ring-ring
									data-[state=active]:bg-primary
									mt-4 inline-flex items-center justify-center whitespace-nowrap
									rounded-full bg-blue-600 px-3 py-1.5 text-sm font-medium text-black
									transition-all
									focus-visible:outline-none focus-visible:ring-2
									focus-visible:ring-offset-2
									disabled:pointer-events-none disabled:opacity-50
									data-[state=active]:shadow-sm
									lg:w-auto
								`}
							>
								{pj.nm}
							</span>

							<Image
								alt={pj.nm}
								width="200"
								height="120"
								decoding="async"
								data-nimg="1"
								className={`
									bottom-4 mt-4 h-auto max-h-32 w-auto rounded-md object-center
									shadow-2xl
								`}
								// style={{ marginTop: '10px', objectFit: 'cover' }}
								src={pj.img}
							/>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
