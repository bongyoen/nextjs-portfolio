import {UNION_STR} from "@/src/components/util/UNION_STR";

export default function Footer() {
    return (
        <footer className="dark:text-white">
            <div className="border-t h-full flex flex-col items-center justify-center px-2 py-4">
                <p className="flex w-full h-2 items-center justify-center my-6">
                    © 2024
                    <span className="font-bold mx-2">{UNION_STR.devel.name}</span>
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}