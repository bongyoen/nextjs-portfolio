import React from 'react';

export default function ContactLink() {
	return (
		<section className="w-full py-12">
			<div className="mx-auto flex flex-col items-center justify-center gap-y-12">
				<h2 className="text-3xl font-bold">추가적으로, 궁금하신 사항이 있으시면 연락 바랍니다. </h2>
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
							{/* eslint-disable-next-line max-len */}
							<path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z" />
						</svg>
					</button>
				</a>
			</div>
		</section>
	);
}
