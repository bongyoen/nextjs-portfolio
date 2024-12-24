import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Base from '@/src/components/cmmn/base';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '포트폴리오',
	description: 'beyondi의 포트폴리오',
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode; auth: ReactNode }>) {
	return (
		<html lang="ko" className="h-full" suppressHydrationWarning>
			<body
				className={`
					${inter.className}
					h-full bg-none
					dark:bg-slate-800
				`}
			>
				<ThemeProvider>
					<Base>{children}</Base>
				</ThemeProvider>
			</body>
		</html>
	);
}
