'use client';

import { ReactNode } from 'react';
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
