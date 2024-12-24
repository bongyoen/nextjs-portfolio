import uicsLogo from '@imgs/uics.png';
import uiboxLogo from '@imgs/uibox.png';
import mouseLogo from '@imgs/mouse.png';
import portfolioLogo from '@imgs/portfolio.png';
import loginLogo from '@imgs/login.png';
import autoAdLogo from '@imgs/autoAd.png';
import vpnLogo from '@imgs/vpn.png';
import { StaticImageData } from 'next/image';

export type ProjectWkType = '개인' | '업무';

export type ProjectType = {
	nm: string;
	img: StaticImageData;
	desc: string;
	wkType: ProjectWkType;
	notion: string;
	tag: string[];
	mainTag: string;
};

type unionStrType = {
	project: {
		uics: ProjectType;
		uibox: ProjectType;
		mouse: ProjectType;
		portfolio: ProjectType;
		login: ProjectType;
		autoAd: ProjectType;
		vpn: ProjectType;
	};
	devel: {
		name: string;
		email: string;
	};
};

export const UNION_STR: unionStrType = {
	project: {
		uics: {
			nm: 'UICS',
			img: uicsLogo,
			notion: '102bccbdf4284728beab98d07d535478',
			wkType: '업무',
			desc: '안경, 콘택트 유통 제조사에 가장 최적화된 업계 전문 프로그램으로 전자 주문과 ERP 기능',
			tag: ['Angulra', 'Ts', 'SpringBoot', 'Mysql'],
			mainTag: 'Angulra',
		},
		uibox: {
			nm: 'UIBOX',
			img: uiboxLogo,
			notion: '1501f9dc9ddc80319c69dbd50e9199a4',
			wkType: '업무',
			desc: '안경원 전문 B2B 쇼핑몰',
			tag: ['Angulra', 'Ts', 'SpringBoot', 'Mysql'],
			mainTag: 'Angulra',
		},
		vpn: {
			nm: '4방식 Vpn 서비스',
			img: vpnLogo,
			notion: '73d8ccf2ca8943e6a4497ea6238fcbcf',
			wkType: '업무',
			desc: 'PPTP, L2TP, OVPN, IKEv2 연결방식을 지원하는 VPN 서비스 시스템',
			tag: ['Ubuntu', 'OpenVpn', 'StrongSwan', 'Iptables', 'L2tpd', 'Pptpd', 'Tc'],
			mainTag: 'Ubuntu',
		},
		autoAd: {
			nm: '네이비드',
			img: autoAdLogo,
			notion: '280e1ab7de81480f855dcdfef9b74746',
			wkType: '업무',
			desc: '네이버 파워링크 자동 입찰 서비스',
			tag: ['Electron', 'SqlLite', 'React', 'Ts'],
			mainTag: 'Electron',
		},
		mouse: {
			nm: 'BLE MOUSE',
			img: mouseLogo,
			notion: '41b0fbe86ae243ca95a6e8750b524407',
			wkType: '개인',
			desc: 'Ble연결을 통한 Android 스마트폰의 블루투스 마우스 이용제품(For Windows)',
			tag: ['Flutter', 'Ble', 'HID', 'SqlLite'],
			mainTag: 'Flutter',
		},
		portfolio: {
			nm: '포트폴리오',
			img: portfolioLogo,
			notion: 'bed98f63be974fe4ac486e9d31909a12',
			wkType: '개인',
			desc: 'Cloud Plaform을 통한 nextJs 포트폴리오 사이트',
			tag: ['NextJs', 'TypeScript', 'Postgre', 'OracleCloud', 'Docker', 'Nginx', 'GitAction'],
			mainTag: 'NextJs',
		},
		login: {
			nm: 'Nest, TypeOrm, Jwt',
			img: loginLogo,
			notion: '7dd7ed74f8d84c92b60a9f0a312d37e4',
			wkType: '개인',
			desc: '',
			tag: ['Nest', 'TypeScript', 'TypeOrm', 'Jwt'],
			mainTag: 'Nest',
		},
	},
	devel: {
		name: '김봉연',
		email: 'kuhj7593@gmail.com',
	},
} as const;

export const PJ_MAP = JSON.parse(JSON.stringify(UNION_STR.project));
