'use client';

import Image from 'next/image';
import developerImg from '@imgs/developer.png';
import React, { useState } from 'react';
import { SKILLS, UNION_STR } from '@/src/model/UNION_STR';
import Skills from '@/src/components/home/skills';
import About_btn from '@/src/components/home/about_me/about_btn';

export type BtnSelecType = {
	target: 1 | 2 | 3;
};

export default function AboutMe() {
	const [btnSelect, setBtnSelect] = useState<BtnSelecType>({ target: 1 });

	return (
		<section className="flex w-full flex-col gap-y-6 px-2 py-20">
			<h2
				className={`
					text-center text-3xl font-black drop-shadow-lg
					lg:text-5xl
				`}
			>
				저를 소개합니다.
			</h2>
			<div className="flex justify-center">
				<div
					className={`
						hidden flex-1 items-center justify-center
						lg:flex
					`}
				>
					<Image
						alt="About Image"
						fetchPriority="high"
						width="200"
						height="200"
						decoding="async"
						data-nimg="1"
						className="h-auto w-auto self-center rounded-md"
						style={{ color: 'transparent' }}
						src={developerImg}
					/>
				</div>
				<div className="flex-1">
					<div className={`flex flex-col items-center`}>
						<div
							className={`
								text-muted-foreground light grid h-max w-full items-center
								justify-center rounded-full border bg-white p-1 text-center
								dark:border-none
								max-lg:rounded-3xl
								max-sm:w-56
								sm:w-56
								lg:w-96 lg:grid-cols-3
							`}
							style={{ outline: 'none' }}
						>
							<About_btn
								title={'자기소개'}
								btnSelect={btnSelect}
								setBtnSelect={setBtnSelect}
								targetNum={{ target: 1 }}
							/>
							<About_btn
								title={'경험'}
								btnSelect={btnSelect}
								setBtnSelect={setBtnSelect}
								targetNum={{ target: 2 }}
							/>
							<About_btn
								title={'기술'}
								btnSelect={btnSelect}
								setBtnSelect={setBtnSelect}
								targetNum={{ target: 3 }}
							/>
						</div>
						<div
							className={`
								mt-20
								lg:mt-8
							`}
						>
							{btnSelect.target === 1 && (
								<div
									data-state="active"
									data-orientation="horizontal"
									role="tabpanel"
									aria-labelledby="radix-:Raanila:-trigger-personal"
									tabIndex={-2}
									id="radix-:Raanila:-content-personal"
									className={`
										ring-offset-background
										focus-visible:ring-ring
										mt-2
										focus-visible:outline-none focus-visible:ring-2
										focus-visible:ring-offset-2
									`}
									style={{ animationDuration: '0s' }}
								>
									<div className="text-start">
										<p className="mt-2 break-keep">
											<b>새로운 기술에 대한 호기심과 끊임없는 열정을 가지고 있습니다.</b>
											학습한 지식을 직접 구현한 블로그에 정리하고 공유함으로써 지식 공유에도
											기여하고 있습니다.
											<br />
											<b>소통과 협업도 중요시합니다. </b>
											다양한 프로젝트 경험을 통해 프론트엔드와 백엔드 개발자들과의 원활한 협업방법과
											개발 프로세스를 익혀왔습니다. 팀 내에서 효과적인 커뮤니케이션과 역할 분담을
											통해 일정 관리와 목표 달성을 위한 체계적인 계획 수립 능력을 갖추고 있습니다.
											이러한 노력으로 프로젝트의 완성도가 높은 팀으로 평가받은 경험이 있습니다.
										</p>
									</div>
									<div
										className={`
											mb-12 mt-4 grid gap-4
											xl:grid-cols-2
										`}
									>
										<div
											className={`
												mx-auto flex w-full items-center gap-x-4 text-start
												xl:mx-0
											`}
										>
											<span className="text-primary">
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 24 24"
													height="1em"
													width="1em"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15
													20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629
													8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137
													13 12 13Z"
													/>
												</svg>
											</span>
											<span>{UNION_STR.devel.name}</span>
										</div>
										<div
											className={`
												mx-auto flex w-full items-center gap-x-4 text-start
												xl:mx-0
											`}
										>
											<span className="text-primary">
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 24 24"
													height="1em"
													width="1em"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21
														21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3
														3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731
														14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"
													/>
												</svg>
											</span>
											<span>{UNION_STR.devel.email}</span>
										</div>
										<div
											className={`
												mx-auto flex w-full items-center gap-x-4 text-start
												xl:mx-0
											`}
										>
											<span className="text-primary">
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 24 24"
													height="1em"
													width="1em"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425
														4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275
														9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098
														19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098
														16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348
														15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098
														18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348
														16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098
														11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598
														8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348
														5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876
														6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276
														6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376
														8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125
														16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325
														14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501
														21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999
														16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
													/>
												</svg>
											</span>
											<span>bongyoen</span>
										</div>
										<div
											className={`
												mx-auto flex w-full items-center gap-x-4 text-start
												xl:mx-0
											`}
										/>
									</div>
								</div>
							)}

							{btnSelect.target === 2 && (
								<div
									className={`
										grid gap-4
										lg:grid-cols-2
									`}
								>
									<div>
										<div className="text-primary flex items-center gap-x-4 text-lg">
											<svg
												stroke="currentColor"
												fill="currentColor"
												strokeWidth="0"
												viewBox="0 0 24 24"
												height="1em"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17
													2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21
													21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM16
													15H13V16H11V15H8V19H16V15ZM8 7V13H11V12H13V13H16V7H8ZM6
													13V7H4V13H6ZM18 13H20V7H18V13ZM6 15H4V19H6V15ZM18 15V19H20V15H18ZM9
													3V5H15V3H9Z"
												/>
											</svg>
											<h4 className="font-medium capitalize">업무 경험</h4>
										</div>
										<ul className="mt-2 flex flex-col gap-y-4 ">
											<li
												className={`
													bg-accent group flex flex-col gap-x-8 rounded-lg p-2 pl-4
												`}
											>
												<span className="mb-2 text-xl font-semibold leading-none">유아이컴</span>
												<span className="text-muted-foreground mb-4 text-lg leading-none">
													기업 부설 연구소 / 연구원
												</span>
												<span className="font-medium">2021.04 - 2022.07</span>
											</li>
											<li
												className={`
													bg-accent group flex flex-col gap-x-8 rounded-lg p-2 pl-4
												`}
											>
												<span className="mb-2 text-xl font-semibold leading-none">
													이원커뮤니케이션
												</span>
												<span className="text-muted-foreground mb-4 text-lg leading-none">
													기업 부설 연구소 / 연구원
												</span>
												<span className="font-medium">2022.09 - 2023.08</span>
											</li>
										</ul>
									</div>
									<div>
										<div className="text-primary flex items-center gap-x-4 text-lg">
											<svg
												stroke="currentColor"
												fill="currentColor"
												strokeWidth="0"
												viewBox="0 0 24 24"
												height="1em"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902
													13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998
													22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001
													13.4913 12.0003 18.1579 3.99902 13.4905Z"
												/>
											</svg>
											<h4 className="font-medium capitalize">교육</h4>
										</div>
										<ul className="mt-2 flex flex-col gap-y-4 ">
											<li
												className={`
													bg-accent group flex flex-col gap-x-8 rounded-lg p-2 pl-4
												`}
											>
												<span className="mb-2 text-xl font-semibold leading-none">
													kh정보교육원
												</span>
												<span className="text-muted-foreground mb-4 text-lg leading-none">
													스마트 콘텐츠 융합 <br />
													응용SW 엔지니어 양성과정
												</span>
												<span className="font-medium">2020.07 ~ 2021.02 </span>
											</li>
											<li
												className={`
													bg-accent group flex flex-col gap-x-8 rounded-lg p-2 pl-4
												`}
											>
												<span className="mb-2 text-xl font-semibold leading-none">목원대학교</span>
												<span className="text-muted-foreground mb-4 text-lg leading-none">
													정보통신융합공학부
												</span>
												<span className="font-medium">2014.03 - 2021.02</span>
											</li>
										</ul>
									</div>
								</div>
							)}

							{btnSelect.target === 3 && (
								<div
									className={`
										ring-offset-background
										focus-visible:ring-ring
										mt-2
										focus-visible:outline-none focus-visible:ring-2
										focus-visible:ring-offset-2
									`}
								>
									<div
										className={`
											text-center
											xl:text-start
										`}
									/>
									<div className="flex flex-col gap-y-4">
										<h4 className="border-b text-xl font-bold">Skills</h4>
										<Skills skills={SKILLS} />
									</div>
									<div className="mt-5 flex flex-col gap-y-4">
										<h4 className="border-b text-xl font-bold">Tools</h4>
										<div className={`grid grid-cols-3 text-center`}>
											<span className="rounded-full border-2 px-2 font-bold">VsCode</span>
											<span className="rounded-full border-2 px-2 font-bold">IntelliJ</span>
											<span className="rounded-full border-2 px-2 font-bold">WebStorm</span>
											<span className="rounded-full border-2 px-2 font-bold">DataGrip</span>
											<span className="rounded-full border-2 px-2 font-bold">Figma</span>
											<span className="rounded-full border-2 px-2 font-bold">Notion</span>
											<span className="rounded-full border-2 px-2 font-bold">Slack</span>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
