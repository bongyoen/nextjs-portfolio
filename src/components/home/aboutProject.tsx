// import MainSlider from '@/src/swiper/userSwiper';
import MainSlider from '../../swiper/userSwiper';
import React from 'react';

export default function AboutProject() {
	return (
		<section
			className={`
				relative mb-12 flex h-full min-h-screen w-full flex-col items-center
				justify-center
				xl:flex-row
			`}>
			<div className={`
				mx-auto mb-12 flex w-full flex-col gap-y-4 p-2 text-center
				xl:mx-0 xl:max-w-md xl:text-start
			`}>
				<h2 className={`
					text-center text-3xl font-black drop-shadow-lg
					lg:text-5xl
				`}>프로젝트</h2>
				<p className={`
					mb-4 break-keep text-center
					xl:text-start
				`}>
					최근에 구현했던 프로젝트들입니다. 더 많은 프로젝트는 아래 버튼을 클릭해서 확인하실 수 있습니다.
				</p>
				<a className="mx-auto" href="/projects">
					<button
						type="button"
						className={`
							ring-offset-background
							focus-visible:ring-ring
							bg-primary text-primary-foreground
							hover:bg-primary/90
							inline-flex h-10 items-center justify-center whitespace-nowrap
							rounded-full px-4 py-2 text-sm font-medium transition-colors
							focus-visible:outline-none focus-visible:ring-2
							focus-visible:ring-offset-2
							disabled:pointer-events-none disabled:opacity-50
						`}
					>
						전체 프로젝트
					</button>
				</a>
			</div>
			<div className={`h-56 w-6/12 rounded-3xl bg-blue-500`}>
				<MainSlider />
			</div>
		</section>
	);
}
