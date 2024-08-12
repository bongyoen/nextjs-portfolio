import Image from "next/image";
import MePng from "@/src/styles/profile.webp";
import {UNION_STR} from "@/src/components/util/UNION_STR";

export default function Intro() {
    return (
        <section className="py-24 min-h-screen h-full flex flex-col gap-x-8 flex-grow relative">
            <div className="flex justify-center gap-x-8">
                <div className="flex w-full flex-col justify-center mx-auto gap-y-1">
                    <h1 className="mb-4 text-3xl lg:text-5xl font-black text-start drop-shadow-lg !leading-normal">
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                                안녕하세요, 저는
                            </span>
                        <br/>
                        <div className="w-max my-7">
                            <h1 className="md:text-2xl lg:text-6xl animate-typing overflow-hidden whitespace-nowrap border-r-8 border-r-black pr-10  text-black font-bold dark:text-white">
                                풀스텍 개발자 입니다.
                            </h1>
                        </div>
                    </h1>
                    <p className="break-keep mb-2 text-sm lg:text-xl">
                        새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>{UNION_STR.devel.name}</b>입니다.
                    </p>
                    <div className="flex flex-col lg:flex-row mt-8 gap-y-8 gap-x-3 mx-auto lg:mx-0 mb-12">
                        <a className="flex items-center" href="/contact">
                            <button type="button"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-x-2 text-lg mx-auto w-full hover:shadow-xl">
                                연락하기
                                <svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                    height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"
                                    />
                                </svg>
                            </button>
                        </a>
                        <a href="/CV.pdf" className="flex items-center">
                            <button type="button"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-x-2 text-lg mx-auto w-full hover:shadow-xl">
                                이력서 저장하기
                                <svg stroke="currentColor"
                                     fill="currentColor"
                                     strokeWidth="0"
                                     viewBox="0 0 24 24"
                                     height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"/>
                                </svg>
                            </button>
                        </a></div>

                </div>
                <div className="hidden md:block">
                    <div
                        className="border-7 border-8 rounded-full p-6  overflow-auto bg-white shadow-[inset_0_0_15px_5px_#62b0cb]">
                        {/* <div className="absolute inset-0 bg-white opacity-75 rounded-lg blur"/> */}
                        <Image className="rounded-full object-contain" objectFit="cover" src={MePng}
                               alt="logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}