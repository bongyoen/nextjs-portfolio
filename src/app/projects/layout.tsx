import { ReactNode } from 'react';

type RootLayoutType = { children: ReactNode; notion: ReactNode };

export default function RootLayout({ children, notion }: RootLayoutType) {
	return (
		<>
			{notion}
			{children}
		</>
	);
}
