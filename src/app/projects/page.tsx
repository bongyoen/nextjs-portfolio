import Base from "@/src/components/base";
import Image from "next/image";
import {UNION_STR} from "@/src/components/util/UNION_STR";
import ProjectItem from "@/src/components/projectItem";

export default function Projects() {
    return (
        <Base>
            <section className="min-h-screen max-w-5xl mx-auto mb-12"><h2
                className="text-center w-full text-4xl font-black mt-8 mb-12">My Projects</h2>
                <div className="w-full mx-auto">
                    <div dir="ltr" data-orientation="horizontal">

                        <div className="text-lg xl:mt-8 grid lg:grid-cols-3 gap-8">
                            <ProjectItem alt={UNION_STR.project.uics} type="업무" mainTag="Angulra"
                                         hashTags={["Angulra", "Ts", "SpringBoot", "Mysql"]}>
                                안경, 콘택트 유통 제조사에 가장 최적화된 업계 전문 프로그램으로
                                전자 주문과 ERP 기능
                            </ProjectItem>
                            <ProjectItem alt={UNION_STR.project.autoAd} type="업무" mainTag="Electron"
                                         hashTags={["Electron", "SqlLite"]}>
                                네이버 파워링크
                                자동 입찰 서비스
                            </ProjectItem>
                            <ProjectItem alt={UNION_STR.project.login} type="개인" mainTag="NextJs"
                                         hashTags={["NextJs", "TypeScript", "TypeOrm", "Jwt"]}>
                                네이버 파워링크
                                자동 입찰 서비스
                            </ProjectItem>
                            <ProjectItem alt={UNION_STR.project.portfolio} type="개인" mainTag="NextJs"
                                         hashTags={["NextJs", "TypeScript", "Postgre", "OracleCloud", "Docker", "Nginx", "GitAction"]}>
                                Cloud Plaform을 통한 nextJs 포트폴리오 사이트
                            </ProjectItem>
                            <ProjectItem alt={UNION_STR.project.vpn} type="업무" mainTag="Ubuntu"
                                         hashTags={["Ubuntu", "OpenVpn", "StrongSwan", "Iptables", "L2tpd", "Pptpd", "Tc"]}>
                                PPTP, L2TP, OVPN, IKEv2 연결방식을 지원하는 VPN 서비스 시스템
                            </ProjectItem>
                            <ProjectItem alt={UNION_STR.project.mouse} type="업무" mainTag="Flutter"
                                         hashTags={["Flutter", "Ble", "HID", "SqlLite"]}>
                                Ble연결을 통한 Android 스마트폰의 블루투스 마우스 이용제품(For Windows)
                            </ProjectItem>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    )
}