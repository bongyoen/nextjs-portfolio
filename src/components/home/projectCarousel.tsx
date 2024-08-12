'use client'

import React from "react";
import Image from "next/image";
import imgLogo from "@/src/styles/logo.png";
import MePng from "@/src/styles/profile.webp";
import {Carousel} from "flowbite-react";

export default function ProjectCarousel() {

    // TS2786: Carousel은 JSX 컴포넌트로 사용할 수 없습니다.
    // Carousel 유형이 유효한 JSX 요소 유형이 아닙니다.
    // 구문 서명 유형이 호환되지 않습니다.
    // 유형 'new (carouselEl?: HTMLElement | null | undefed, items?: CarouselItem[] | 정의되지 않음, options?: CarouselOptions | undefed, instanceOptions?: InstanceOptions | undefine) => Carousel'은 'new( props: any, deprecatedLegacyContext?: any) => Component<any, any, any>'.
    // Type Carousel에는 Component<any, any, any> 유형의 context, setState, forceUpdate, render 외 3개 속성이 누락되어 있습니다.
    return (
        <Carousel id="carousel" className="w-[300px]">
            {/* <div className="contents"><Image alt="slide" className="relative" src={imgLogo} width={200} height={500}/> */}
            {/* </div> */}
            {/* <div className="contents"><Image alt="slide" className="relative" src={MePng} width={200} height={500}/> */}
            {/* </div> */}
            {/* <div className="contents"><Image alt="slide" className="relative" src={imgLogo} width={200} height={500}/> */}
            {/* </div> */}
            {/* <div className="contents"><Image alt="slide" className="relative" src={MePng} width={200} height={500}/> */}
            {/* </div> */}
            <div>
                <div>여기는 프로젝트1</div>
            </div>
            <div>
                여기는 프로젝트2
            </div>
            
        </Carousel>
    )

}