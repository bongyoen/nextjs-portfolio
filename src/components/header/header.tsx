'use client';

import HeaderMenu from '@/src/components/header/headerMenu';
import HeaderIcon from '@/src/components/header/headerIcon';

export default function Header() {
	return (
		<header className={`
			sticky top-0 z-50 mx-auto
			bg-[color:hsl(var(--primary-foreground))]
			dark:bg-slate-800
		`}>
			<div className={`
				mx-auto my-0 flex w-full max-w-screen-xl justify-between border-b-4
				border-solid border-gray-200 px-5 pb-3 pt-2
				dark:border-gray-950 dark:bg-slate-800
			`}>
				<HeaderIcon />
				<HeaderMenu />
			</div>
		</header>
	);
}
