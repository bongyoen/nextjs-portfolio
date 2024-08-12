import Base from "@/src/components/base";
import Image from "next/image";
import ContactImg from "@/src/styles/contact.svg"
import {UNION_STR} from "@/src/components/util/UNION_STR";

export default function Contact() {
    return (
        <Base>
            <section className="flex items-center justify-between p-4 mx-auto w-full container">
                <div className="flex-1">
                    <h2 className="text-center w-full text-4xl font-black mt-8 mb-12">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Let's Work Together
                    </h2>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center flex-col mx-auto">
                    <Image alt="contact"
                           fetchPriority="high"
                           width="500"
                           height="500"
                           decoding="async"
                           data-nimg="1"
                           className="rounded-xl w-72 h-72"
                           src={ContactImg}
                           style={{color: "transparent;"}}/>
                </div>
            </section>
            <section className="flex flex-col md:flex-row gap-y-8 container">
                <div className="flex-1 flex flex-col gap-y-8 text-xl font-bold lg:text-2xl px-2">
                    <a href={`mailto:${UNION_STR.devel.email}`} className="flex items-center gap-x-2" target="_blank"
                       rel="noreferrer">
                        <span className="text-primary">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                             viewBox="0 0 24 24" height="32" width="32"
                             xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"/></svg>
                        </span>
                        <span>{UNION_STR.devel.email}</span>
                    </a>
                </div>
                <div className="flex-1">
                    <form
                        className="flex max-w-3xl mx-auto flex-col w-full p-4 gap-4"
                        action="api/email"
                        method="post"

                    >
                        <div className="flex w-full justify-between gap-4 flex-col">
                            <input type="text"
                                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                   placeholder="이름"
                                   maxLength={20}
                                   required
                                   name="senderName"/>
                            <input
                                type="email"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="이메일"
                                maxLength={200}
                                name="senderEmail"
                                required
                            />
                        </div>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            name="message" placeholder="내용" maxLength={5000} minLength={5}
                            required
                        />
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            type="submit">
                            <span className="flex items-center gap-x-2">
                                보내기
                                <svg stroke="currentColor"
                                     fill="currentColor"
                                     strokeWidth="0"
                                     viewBox="0 0 16 16"
                                     height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
            </section>
        </Base>
    )
}