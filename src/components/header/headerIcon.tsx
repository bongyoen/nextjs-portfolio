import Image from 'next/image';
import imgLogo from '@imgs/logo.png';

export default function HeaderIcon() {
	return (
		<div className="flex items-center">
			<a href="/">
				<Image src={imgLogo} width={50} height={50} alt="logo" />
			</a>
		</div>
	);
}
