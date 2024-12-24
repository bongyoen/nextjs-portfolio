'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/dist/client/components/navigation';

const Email_alert = () => {
	const pathname = useSearchParams();
	const router = useRouter();
	if (pathname.get('issend') == 'ok') {
		alert('이메일 전송완료');
		router.back();
	}
	return <div></div>;
};

export default Email_alert;