'use client'

import SwiperCore from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";
import {Navigation, Scrollbar, Pagination} from "swiper/modules"; // Swiper v6 이상의 경우
import 'swiper/css';
import 'swiper/css/pagination';
import {UNION_STR} from "@/src/components/util/UNION_STR";

export default function MainSlider() {
    SwiperCore.use([Navigation, Scrollbar]);
    useRef<SwiperCore>();
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className="w-[1.1rem]">
                <span
                    className="bg-blue-600 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black">
                    {UNION_STR.project.mouse}
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span
                    className="bg-blue-600 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black">
                    {UNION_STR.project.uics}
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span
                    className="bg-blue-600 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black">
                    {UNION_STR.project.portfolio}
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span
                    className="bg-blue-600 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black">
                    {UNION_STR.project.login}
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span
                    className="bg-blue-600 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black">
                    {UNION_STR.project.autoAd}
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span
                    className="bg-blue-600 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary  data-[state=active]:shadow-sm w-48 lg:w-auto text-black">
                    {UNION_STR.project.vpn}
                </span>
            </SwiperSlide>
        </Swiper>
    );
}