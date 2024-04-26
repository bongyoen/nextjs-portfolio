'use client'

import HeaderMenu from "@/src/components/header/headerMenu";
import HeaderIcon from "@/src/components/header/headerIcon";


export default function Header() {

    return (
        <header className="mx-auto top-0 sticky z-50 bg-[color:hsl(var(--primary-foreground))] dark:bg-slate-800">
            <div
                className="dark:bg-slate-800 w-full flex justify-between px-5 pt-2 pb-3 mx-auto my-0 max-w-screen-xl border-b-4 border-solid border-gray-200 dark:border-gray-950">
                <HeaderIcon/>
                <HeaderMenu/>
            </div>
        </header>
    )
}