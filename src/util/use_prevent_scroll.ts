import { useEffect } from 'react';

const preventScroll = (event: Event) => {
	event.preventDefault();
};

const usePreventScroll = (elementId: string) => {
	useEffect(() => {
		const element = document.getElementById(elementId);
		if (element) {
			console.log(element);

			element.addEventListener('scroll', preventScroll, { passive: false });
		}

		return () => {
			if (element) {
				element.removeEventListener('scroll', preventScroll);
			}
		};
	}, [elementId]);
	console.log('도달함?');
};

export default usePreventScroll;
