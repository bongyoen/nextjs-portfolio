import Base from '@/src/components/base';
import { PJ_MAP, ProjectType, ProjectWkType, UNION_STR } from '@/src/components/model/UNION_STR';
import ProjectItem from '@/src/components/cmmn/projectItem';

export default function Projects() {


	return (
		<Base>
			<section className="mx-auto mb-12 min-h-screen max-w-5xl">
				<h2 className="mb-12 mt-8 w-full text-center text-4xl font-black">My Projects</h2>
				<div className="mx-auto w-full">
					<div dir="ltr" data-orientation="horizontal">
						<div
							className={`
								grid gap-8 text-lg
								lg:grid-cols-3
								xl:mt-8
							`}
						>

							{Object.entries(PJ_MAP).map(([key, value]) => {
								const pj = value as ProjectType
								return (
									<ProjectItem
										alt={pj.nm}
										img={pj.img}
										notion={pj.notion}
										type={pj.wkType}
										mainTag={pj.mainTag}
										hashTags={pj.tag}
										key={key}
									>
										{pj.desc}
									</ProjectItem>
								);
							})}
							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.uibox.nm} */}
							{/* 	img={UNION_STR.project.uibox.img} */}
							{/* 	notion={UNION_STR.project.uibox.notion} */}
							{/* 	type="업무" */}
							{/* 	mainTag="Angulra" */}
							{/* 	hashTags={['Angulra', 'Ts', 'SpringBoot', 'Mysql']} */}
							{/* > */}
							{/* 	안경, 콘택트 유통 제조사에 가장 최적화된 업계 전문 프로그램으로 전자 주문과 ERP 기능 */}
							{/* </ProjectItem> */}
							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.uics.nm} */}
							{/* 	img={UNION_STR.project.uics.img} */}
							{/* 	notion={UNION_STR.project.uics.notion} */}
							{/* 	type="업무" */}
							{/* 	mainTag="Angulra" */}
							{/* 	hashTags={['Angulra', 'Ts', 'SpringBoot', 'Mysql']} */}
							{/* > */}
							{/* 	안경, 콘택트 유통 제조사에 가장 최적화된 업계 전문 프로그램으로 전자 주문과 ERP 기능 */}
							{/* </ProjectItem> */}
							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.autoAd.nm} */}
							{/* 	type="업무" */}
							{/* 	mainTag="Electron" */}
							{/* 	img={UNION_STR.project.autoAd.img} */}
							{/* 	notion={UNION_STR.project.autoAd.notion} */}
							{/* 	hashTags={['Electron', 'SqlLite', 'React', 'Ts']} */}
							{/* > */}
							{/* 	네이버 파워링크 자동 입찰 서비스 */}
							{/* </ProjectItem> */}

							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.vpn.nm} */}
							{/* 	type="업무" */}
							{/* 	mainTag="Ubuntu" */}
							{/* 	img={UNION_STR.project.vpn.img} */}
							{/* 	notion={UNION_STR.project.vpn.notion} */}
							{/* 	hashTags={['Ubuntu', 'OpenVpn', 'StrongSwan', 'Iptables', 'L2tpd', 'Pptpd', 'Tc']} */}
							{/* > */}
							{/* 	PPTP, L2TP, OVPN, IKEv2 연결방식을 지원하는 VPN 서비스 시스템 */}
							{/* </ProjectItem> */}
							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.login.nm} */}
							{/* 	type="개인" */}
							{/* 	mainTag="NextJs" */}
							{/* 	img={UNION_STR.project.login.img} */}
							{/* 	notion={UNION_STR.project.login.notion} */}
							{/* 	hashTags={['NextJs', 'TypeScript', 'TypeOrm', 'Jwt']} */}
							{/* > */}
							{/* 	네이버 파워링크 자동 입찰 서비스 */}
							{/* </ProjectItem> */}
							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.portfolio.nm} */}
							{/* 	type="개인" */}
							{/* 	mainTag="NextJs" */}
							{/* 	img={UNION_STR.project.portfolio.img} */}
							{/* 	notion={UNION_STR.project.portfolio.notion} */}
							{/* 	hashTags={[ */}
							{/* 		'NextJs', */}
							{/* 		'TypeScript', */}
							{/* 		'Postgre', */}
							{/* 		'OracleCloud', */}
							{/* 		'Docker', */}
							{/* 		'Nginx', */}
							{/* 		'GitAction', */}
							{/* 	]} */}
							{/* > */}
							{/* 	Cloud Plaform을 통한 nextJs 포트폴리오 사이트 */}
							{/* </ProjectItem> */}
							{/* <ProjectItem */}
							{/* 	alt={UNION_STR.project.mouse.nm} */}
							{/* 	type="개인" */}
							{/* 	mainTag="Flutter" */}
							{/* 	img={UNION_STR.project.mouse.img} */}
							{/* 	notion={UNION_STR.project.mouse.notion} */}
							{/* 	hashTags={['Flutter', 'Ble', 'HID', 'SqlLite']} */}
							{/* > */}
							{/* 	Ble연결을 통한 Android 스마트폰의 블루투스 마우스 이용제품(For Windows) */}
							{/* </ProjectItem> */}
						</div>
					</div>
				</div>
			</section>
		</Base>
	);
}
