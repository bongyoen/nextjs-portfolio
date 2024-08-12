import MainSlider from "@/swiper/userSwiper";

export default function AboutProject() {


    return (
        <section
            className="flex flex-col xl:flex-row mb-12 items-center justify-center relative w-full min-h-screen h-full"
        >
            <div
                className="w-full xl:max-w-md mx-auto xl:mx-0 text-center xl:text-start mb-12 flex flex-col gap-y-4 p-2">
                <h2 className="text-3xl lg:text-5xl text-center font-black drop-shadow-lg">프로젝트</h2><p
                className="mb-4 break-keep text-center xl:text-start">최근에 구현했던 프로젝트들입니다. 더 많은 프로젝트는 아래 버튼을 클릭해서 확인하실
                수
                있습니다.</p><a className="mx-auto" href="/projects">
                <button type="button"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">전체
                    프로젝트
                </button>
            </a>
            </div>
            <div className="w-6/12 h-56 bg-blue-500">
                <MainSlider/>
            </div>
        </section>
    )
}