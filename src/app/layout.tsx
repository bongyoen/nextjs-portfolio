import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '포트폴리오',
	description: 'beyondi의 포트폴리오',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="ko" className="h-full" suppressHydrationWarning>

		<body className={`
			${inter.className}
			h-full bg-none
			dark:bg-slate-800
		`}>
		<ThemeProvider>{children}</ThemeProvider>
		</body>
		{/* <body className={`${inter.className} bg-none h-full dark:bg-slate-800`}> */}
		{/* <ThemeProvider>{children}</ThemeProvider> */}

		{/* <div id="map" style={{ width: '100%', height: '400px' }} /> */}

		{/* <script> */}

		{/* </script> */}
		{/* </body> */}
		</html>
	);
}
