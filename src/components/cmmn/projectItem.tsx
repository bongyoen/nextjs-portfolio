'use client'


import Image from "next/image";
import {ReactNode} from "react";


type ProjectType = "개인" | "업무";

type ProjectItemType = {
    alt: string;
    children: ReactNode,
    type: ProjectType,
    mainTag: string,
    hashTags: string[],
}


export default function ProjectItem({alt, children, type, hashTags, mainTag}: ProjectItemType) {

    return (
        <div data-state="active" data-orientation="horizontal" role="tabpanel"
             aria-labelledby="radix-:r4:-trigger-All" id="radix-:r4:-content-All" tabIndex={0}
             className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
             style={{animationDuration: "0s;"}}>
            <div className="relative"><a href="https://github.com/woongsnote/woongsnote-dev"
                                         target="_blank" rel="noreferrer">
                <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm group relative overflow-hidden max-w-sm hover:shadow-lg transition-all mx-auto">
                    <div className="flex flex-col space-y-1.5 p-0 bg-primary/20">
                        <div className="relative w-full h-52 flex items-center justify-center">
                            <Image
                                alt={alt}
                                width="200" height="120"
                                decoding="async" data-nimg="1"
                                className="absolute bottom-4 shadow-2xl w-auto max-h-32 mx-auto rounded-md object-center h-auto"
                                src="/_next/image?url=%2Ftech-blog.png&amp;w=640&amp;q=75"
                                style={{color: " transparent;"}}/></div>
                    </div>
                    <div className="px-4 py-2 gap-y-2 flex flex-col h-32">
                        <div
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-sm font-medium mb-2 absolute top-4 left-5"
                        >
                            {mainTag}
                        </div>
                        <h4 className="text-2xl font-bold">
                            {alt}
                        </h4>
                        <p className="text-muted-foreground break-keep text-sm">
                            {children}
                        </p>
                    </div>
                    <div
                        className="items-center p-6 pt-0 flex flex-col gap-y-2 text-sm w-full text-start">
                        <p className="w-full text-start">
                            {type} 프로젝트
                        </p>
                        <div className=" w-full flex flex-wrap gap-x-1.5 text-start">
                            {
                                hashTags.map(value => <span>#{value}</span>)
                            }
                        </div>

                    </div>
                </div>
            </a></div>
        </div>
    )
}