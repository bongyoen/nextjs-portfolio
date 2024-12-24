import Image from 'next/image';
import MePng from '@/src/styles/profile.webp';
import { UNION_STR } from '@/src/model/UNION_STR';

export default function Intro() {
	return (
		<section
			className={`
			relative flex h-full min-h-screen flex-grow flex-col gap-x-8 py-24
		`}
		>
			<div className="flex justify-center gap-x-8">
				<div className="mx-auto flex w-full flex-col justify-center gap-y-1">
					<h1
						className={`
							mb-4 text-start text-3xl font-black !leading-normal drop-shadow-lg
							lg:text-5xl
						`}
					>
						<span
							className={`
								bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold
								text-transparent
							`}
						>
							{process.env.DB_HOST}
							안녕하세요, 저는
						</span>
						<br />
						<div className="my-7 w-max">
							<h1
								className={`
									animate-typing overflow-hidden whitespace-nowrap border-r-8
									border-r-black pr-10 font-bold text-black
									dark:text-white
									md:text-2xl
									lg:text-6xl
								`}
							>
								풀스텍 개발자 입니다.
							</h1>
						</div>
					</h1>
					<p
						className={`
							mb-2 break-keep text-sm
							lg:text-xl
						`}
					>
						새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>{UNION_STR.devel.name}</b>입니다.
					</p>
					<div
						className={`
							mx-auto mb-12 mt-8 flex flex-col gap-x-3 gap-y-8
							lg:mx-0 lg:flex-row
						`}
					>
						<a className="flex items-center" href="/contact">
							<button
								type="button"
								className={`
									ring-offset-background
									focus-visible:ring-ring
									bg-primary text-primary-foreground
									hover:bg-primary/90
									mx-auto inline-flex h-10 w-full items-center justify-center gap-x-2
									whitespace-nowrap rounded-full px-4 py-2 text-lg font-medium
									transition-colors
									hover:shadow-xl
									focus-visible:outline-none focus-visible:ring-2
									focus-visible:ring-offset-2
									disabled:pointer-events-none disabled:opacity-50
								`}
							>
								연락하기
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 24 24"
									height="18"
									width="18"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034
										1.95706 8.6812L21.0433 2.31913C21.5717 2.14297
										21.8748 2.43878	21.7268 2.95706L16.2736 22.0433C16.1226
										22.5718 15.8179 22.5901 15.5946 22.0877L12.0002
										14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"
									/>
								</svg>
							</button>
						</a>
						<a href="/개발자 김봉연 이력서.pdf" download className="flex items-center">
							<button
								type="button"
								className={`
									ring-offset-background
									focus-visible:ring-ring
									border-input bg-background
									hover:bg-accent hover:text-accent-foreground
									mx-auto inline-flex h-10 w-full items-center justify-center gap-x-2
									whitespace-nowrap rounded-full border px-4 py-2 text-lg font-medium
									transition-colors
									hover:shadow-xl
									focus-visible:outline-none focus-visible:ring-2
									focus-visible:ring-offset-2
									disabled:pointer-events-none disabled:opacity-50
								`}
							>
								이력서 저장하기
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 24 24"
									height="18"
									width="18"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472
										8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"
									/>
								</svg>
							</button>
						</a>
					</div>
				</div>
				<div
					className={`
						hidden
						md:block
					`}
				>
					<div
						className={`
							border-7 overflow-auto rounded-full border-8 bg-white p-6
							shadow-[inset_0_0_15px_5px_#62b0cb]
						`}
					>
						{/* <div className="absolute inset-0 bg-white opacity-75 rounded-lg blur"/> */}
						<Image
							className="rounded-full object-contain"
							// objectFit="cover"
							style={{ objectFit: 'cover' }}
							src={MePng}
							alt="logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
