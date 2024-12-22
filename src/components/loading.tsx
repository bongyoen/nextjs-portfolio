// app/products/[id]/loading.tsx

import { PhotoIcon } from '@heroicons/react/24/solid';

export default function Loading() {
	return (
		<div className="flex w-full animate-pulse flex-wrap ">
			<div className="h-10 w-9/12 rounded-md bg-neutral-700 impr-mb-3"  />
			<div className="h-10 w-9/12 rounded-md bg-neutral-700"  />
		</div>
	);
}
