'use client';

import Image from "next/image";
import developerImg from "@/src/styles/developer.png"
import {useState} from "react";
import {UNION_STR} from "@/src/components/util/UNION_STR";

type BtnSelecType = {
    target: 1 | 2 | 3
}

export default function AboutMe() {

    const [btnSelect, setBtnSelect] = useState<BtnSelecType>({target: 1})


    return (
        <section className="flex flex-col py-20 px-2 w-full gap-y-6">
            <h2 className="text-3xl lg:text-5xl text-center font-black drop-shadow-lg">저를 소개합니다.</h2>
            <div className="flex justify-center">
                <div className="hidden lg:flex flex-1 items-center justify-center">
                    <Image alt="About Image"
                           fetchPriority="high" width="200"
                           height="200" decoding="async"
                           data-nimg="1"
                           className="w-auto h-auto rounded-md self-center"
                           style={{color: "transparent"}}
                           src={developerImg}
                    />
                </div>
                <div className="flex-1">
                    <div>
                        <div
                            className="justify-center xl:bg-white dark:md:bg-secondary p-1 text-muted-foreground w-full grid lg:grid-cols-3 xl:border rounded-full h-12 items-center dark:border-none"
                            style={{outline: "none"}}>
                            <button type="button"
                                    onClick={() => setBtnSelect({target: 1})}
                                    className={`${btnSelect.target === 1 ? 'bg-blue-600' : ''} inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black`}
                            >
                                자기소개
                            </button>
                            <button type="button"
                                    onClick={() => setBtnSelect({target: 2})}
                                    className={`${btnSelect.target === 2 ? 'bg-blue-600' : ''} inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black`}
                            >
                                경험
                            </button>
                            <button type="button"
                                    onClick={() => setBtnSelect({target: 3})}
                                    className={`${btnSelect.target === 3 ? 'bg-blue-600' : ''} inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black`}
                            >
                                기술
                            </button>
                        </div>
                        <div className="mt-20 lg:mt-8">
                            {btnSelect.target === 1 &&
                                <div data-state="active" data-orientation="horizontal" role="tabpanel"
                                     aria-labelledby="radix-:Raanila:-trigger-personal"
                                     tabIndex={-2}
                                     id="radix-:Raanila:-content-personal"
                                     className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                     style={{animationDuration: "0s"}}>
                                    <div className="text-start">
                                        <p className="break-keep mt-2">
                                            <b>새로운 기술에 대한 호기심과 끊임없는 열정을 가지고 있습니다.</b>
                                            학습한 지식을 직접 구현한 블로그에 정리하고 공유함으로써 지식 공유에도 기여하고
                                            있습니다.
                                            <br/>
                                            <b>소통과 협업도 중요시합니다. </b>
                                            다양한 프로젝트 경험을 통해 프론트엔드와 백엔드 개발자들과의 원활한 협업방법과 개발
                                            프로세스를 익혀왔습니다. 팀 내에서 효과적인 커뮤니케이션과 역할 분담을 통해 일정 관리와 목표 달성을 위한 체계적인 계획 수립 능력을
                                            갖추고 있습니다. 이러한 노력으로 프로젝트의 완성도가 높은 팀으로 평가받은 경험이 있습니다.
                                        </p>
                                    </div>
                                    <div className="mt-4 grid xl:grid-cols-2 gap-4 mb-12">
                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0 text-start w-full">
                                            <span className="text-primary"><svg stroke="currentColor"
                                                                                fill="currentColor" strokeWidth="0"
                                                                                viewBox="0 0 24 24" height="1em"
                                                                                width="1em"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"/></svg></span><span>{UNION_STR.devel.name}</span>
                                        </div>
                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0 text-start w-full">
                                            <span className="text-primary"><svg stroke="currentColor"
                                                                                fill="currentColor" strokeWidth="0"
                                                                                viewBox="0 0 24 24" height="1em"
                                                                                width="1em"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"/></svg></span><span>{UNION_STR.devel.email}</span>
                                        </div>
                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0 text-start w-full">
                                            <span className="text-primary">
                                                <svg stroke="currentColor"
                                                     fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 24 24" height="1em"
                                                     width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
                                                />
                                                </svg>
                                            </span>
                                            <span>bongyoen</span>
                                        </div>
                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0 text-start w-full"/>

                                    </div>
                                </div>
                            }

                            {btnSelect.target === 2 &&
                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex text-primary gap-x-4 items-center text-lg">
                                            <svg stroke="currentColor"
                                                 fill="currentColor"
                                                 strokeWidth="0"
                                                 viewBox="0 0 24 24"
                                                 height="1em"
                                                 width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM16 15H13V16H11V15H8V19H16V15ZM8 7V13H11V12H13V13H16V7H8ZM6 13V7H4V13H6ZM18 13H20V7H18V13ZM6 15H4V19H6V15ZM18 15V19H20V15H18ZM9 3V5H15V3H9Z"/>
                                            </svg>
                                            <h4 className="capitalize font-medium">업무 경험</h4></div>
                                        <ul className="flex flex-col gap-y-4 mt-2 ">
                                            <li className=" pl-4 flex flex-col gap-x-8 group bg-accent rounded-lg p-2"><span
                                                className="font-semibold text-xl leading-none mb-2">유아이컴</span><span
                                                className="text-lg leading-none text-muted-foreground mb-4">기업 부설 연구소 / 연구원</span><span
                                                className="font-medium">2021.04 - 2022.07</span></li>
                                            <li className=" pl-4 flex flex-col gap-x-8 group bg-accent rounded-lg p-2"><span
                                                className="font-semibold text-xl leading-none mb-2">이원커뮤니케이션</span><span
                                                className="text-lg leading-none text-muted-foreground mb-4">기업 부설 연구소 / 연구원</span><span
                                                className="font-medium">2022.09 - 2023.08</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex text-primary gap-x-4 items-center text-lg">
                                            <svg stroke="currentColor"
                                                 fill="currentColor"
                                                 strokeWidth="0"
                                                 viewBox="0 0 24 24"
                                                 height="1em"
                                                 width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"/>
                                            </svg>
                                            <h4 className="capitalize font-medium">교육</h4></div>
                                        <ul className="flex flex-col gap-y-4 mt-2 ">
                                            <li className=" pl-4 flex flex-col gap-x-8 group bg-accent rounded-lg p-2"><span
                                                className="font-semibold text-xl leading-none mb-2">kh정보교육원</span><span
                                                className="text-lg leading-none text-muted-foreground mb-4">스마트 콘텐츠 융합 <br/>응용SW 엔지니어 양성과정</span><span
                                                className="font-medium">2020.07 ~ 2021.02 </span></li>
                                            <li className=" pl-4 flex flex-col gap-x-8 group bg-accent rounded-lg p-2"><span
                                                className="font-semibold text-xl leading-none mb-2">목원대학교</span><span
                                                className="text-lg leading-none text-muted-foreground mb-4">정보통신융합공학부</span><span
                                                className="font-medium">2014.03 - 2021.02</span></li>
                                        </ul>
                                    </div>
                                </div>
                            }

                            {btnSelect.target === 3 &&
                                <div
                                    className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <div className="text-center xl:text-start"/>
                                    <div className="flex flex-col gap-y-4">
                                        <h4 className="border-b text-xl font-bold">Skills</h4>
                                        <div className="group bg-accent p-2 rounded-md">
                                            <span className="text-lg font-bold leading-none">React</span>
                                            <p className="text-sm keep-all">
                                                CRA 나 Vite, Next.js 등의 프레임워크를 사용해서 웹사이트를 구현할 수 있습니다.
                                            </p>
                                        </div>
                                        <div className="group bg-accent p-2 rounded-md">
                                            <span className="text-lg font-bold leading-none">CSS Framework</span>
                                            <p className="text-sm keep-all">
                                                TailwindCSS, Styled Component 등을 사용할 수 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-4 mt-2">
                                        <h4 className="border-b text-xl font-bold">Tools</h4>
                                        <div className="flex gap-x-2">
                                            <span className="border-2 rounded-full px-2 font-bold">VsCode</span>
                                            <span className="border-2 rounded-full px-2 font-bold">Notion</span>
                                            <span className="border-2 rounded-full px-2 font-bold">Slack</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}