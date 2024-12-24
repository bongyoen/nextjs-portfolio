import { UNION_STR } from '@/src/model/UNION_STR';

export default function Footer() {
	return (
		<footer className="dark:text-white">
			<div
				className={`
				flex h-full flex-col items-center justify-center border-t px-2 py-4
			`}
			>
				<p className="my-6 flex h-2 w-full items-center justify-center">
					© 2024
					<span className="mx-2 font-bold">{UNION_STR.devel.name}</span>
					All rights reserved.
				</p>
			</div>
		</footer>
	);
}
