import {ReactNode} from "react";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";


export default function Base({children}: { children: ReactNode }) {
    return (
        <>
            <Header/>
            <main className="container min-h-screen relative dark:text-white max-w-screen-xl">
                {children}
            </main>
            <Footer/>
        </>
    )
}