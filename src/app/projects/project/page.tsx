import Loading from '@/src/app/projects/@notion/(.)project/[id]/loading';
import { Suspense } from 'react';

export default function Project() {
	return (
		<Suspense fallback={<Loading />}>
			<div />
		</Suspense>
	);
}
