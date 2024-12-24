import Header from '@/src/components/header/header';
import Footer from '@/src/components/footer/footer';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import React, { ReactNode } from 'react';

export default function Base({ children }: { children: ReactNode }) {
	return (
		<>
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
