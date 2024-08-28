'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Header from '@/src/components/header/header';
import Footer from '@/src/components/footer/footer';
import * as Modal from '@/src/bloc/modal';
import NotionPage from '@/src/components/notion/notionPage';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

export default function Base({ children }: { children: ReactNode }) {
	const bloc = Modal.useBloc();
	const state = Modal.useState();
	const close = () => bloc.next(Modal.close);

	const notionScrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		notionScrollRef.current?.scrollTo({ left: 0, top: 0 });
		const prevScrollY = preventScroll();
		if (!state.openYn) allowScroll(prevScrollY);
	}, [state]);

	const preventScroll = () => {
		const currentScrollY = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
		document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
		document.body.style.overflowY = 'scroll';
		return currentScrollY;
	};

	const allowScroll = (prevScrollY: number) => {
		document.body.style.position = '';
		document.body.style.width = '';
		document.body.style.top = '';
		document.body.style.overflowY = '';
		window.scrollTo(0, prevScrollY);
	};
	return (
		<>
			<div
				onClick={close}
				style={{}}
				className={`
					fixed inset-0 z-40 flex h-full w-full items-center justify-center
					bg-[rgba(229,218,218,0.4)]
					${state.openYn ? '' : 'hidden'}
				`}
			>
				<div
					className={`
						absolute left-1/2 top-1/2 z-50 h-5/6 w-5/6 -translate-x-1/2
						-translate-y-1/2 transform overflow-auto bg-red-400 text-center
					`}
					onClick={(e) => e.stopPropagation()}
					ref={notionScrollRef}
				>
					{state.notionPage != null ? (
						<main>
							<NotionPage recordMap={state.notionPage} rootPageId={state.pageId!} />
						</main>
					) : (
						<></>
					)}
				</div>
			</div>
			<Header />
			<main
				className={`
					container relative min-h-screen max-w-screen-xl
					dark:text-white
				`}
			>
				{children}
			</main>
			<Footer />
		</>
	);
}
