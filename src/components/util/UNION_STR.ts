import uicsLogo from '@/src/styles/uics.png';
import mouseLogo from '@/src/styles/mouse.png';
import portfolioLogo from '@/src/styles/portfolio.png';
import loginLogo from '@/src/styles/login.png';
import autoAdLogo from '@/src/styles/autoAd.png';
import vpnLogo from '@/src/styles/vpn.png';

export const UNION_STR = {
	project: {
		uics: { nm: 'UICS', imgSrc: uicsLogo, notion: '102bccbdf4284728beab98d07d535478' },
		mouse: { nm: 'BLE MOUSE', imgSrc: mouseLogo, notion: '41b0fbe86ae243ca95a6e8750b524407' },
		portfolio: {
			nm: '포트폴리오',
			imgSrc: portfolioLogo,
			notion: 'bed98f63be974fe4ac486e9d31909a12',
		},
		login: {
			nm: 'Nest, TypeOrm, Jwt',
			imgSrc: loginLogo,
			notion: '7dd7ed74f8d84c92b60a9f0a312d37e4',
		},
		autoAd: { nm: '네이비드', imgSrc: autoAdLogo, notion: '280e1ab7de81480f855dcdfef9b74746' },
		vpn: { nm: '4방식 Vpn 서비스', imgSrc: vpnLogo, notion: '73d8ccf2ca8943e6a4497ea6238fcbcf' },
	},
	devel: {
		name: '김봉연',
		email: 'kuhj7593@gmail.com',
	},
} as const;
