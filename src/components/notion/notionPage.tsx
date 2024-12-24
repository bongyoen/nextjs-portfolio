'use client';
import '../notion/notion1.scss';
import {
	PartialSelectResponse,
	PartialSelectResponseList,
} from '@/src/app/projects/@notion/(.)project/[id]/page';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import React, { useEffect, useRef } from 'react';
import Loading from '@/src/components/loading';
import { useRouter } from 'next/navigation';

type NotinoRenderType = {
	notionKey: string;
	skills: PartialSelectResponseList;
	recordMap: ExtendedRecordMap;
};

const NotionPage = ({ notionKey, skills, recordMap }: NotinoRenderType) => {
	const notionScrollRef = useRef<HTMLDivElement>(null);
	const notionOuterRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		notionScrollRef.current?.scrollTo({ left: 0, top: 0 });

		const handleClickOutside = (event: any) => {
			if (
				notionOuterRef.current &&
				notionScrollRef.current &&
				notionOuterRef.current.contains(event.target) &&
				!notionScrollRef.current?.contains(event.target)
			) {
				router.back();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.body.style.overflow = 'auto';
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [router]);

	const CustomComponent: React.FC = () => {
		return (
			<>
				<div className={`pb-3 text-sm text-gray-400 `}>🚀 Skills</div>
				<div className="flex w-full flex-wrap gap-x-2 gap-y-1.5 pb-8">
					{skills != null ? skills?.map((skill) => SkillComponent(skill)) : <Loading />}
				</div>
			</>
		);
	};

	const SkillComponent = (skill: PartialSelectResponse) => {
		return (
			<div key={skill.id} style={{ position: 'relative' }}>
				<div
					className={`
						m-0 flex h-5 min-w-0 max-w-full flex-shrink-0 items-center overflow-hidden
						text-ellipsis whitespace-nowrap rounded-lg p-4 px-1.5 text-sm font-bold
						leading-[120%] text-slate-500
					`}
					style={{
						background: skill.color == 'default' ? 'burlywood' : skill.color,
						opacity: '0.4',
					}}
				>
					<div
						className={`
							inline-flex h-5 items-center overflow-hidden text-ellipsis
							whitespace-nowrap bg-opacity-5 leading-5
						`}
					>
						<span
							className="overflow-hidden text-ellipsis whitespace-nowrap"
							style={{ color: skill.color == 'default' ? 'burlywood' : skill.color }}
						>
							{skill.name}
						</span>
					</div>
				</div>
				<div
					className={`
						inline-flex h-5 items-center overflow-hidden text-ellipsis
						whitespace-nowrap leading-5
					`}
					style={{ position: 'absolute', top: '20%', transform: 'translateX(-50%)' }}
				>
					<span className="overflow-hidden text-ellipsis whitespace-nowrap font-serif">
						{skill.name}
					</span>
				</div>
			</div>
		);
	};

	return (
		<>
			<div
				style={{}}
				className={`
					fixed inset-0 z-40 flex h-full w-full items-center justify-center
					bg-[rgba(229,218,218,0.4)]
				`}
				ref={notionOuterRef}
			>
				<div
					className={`
						absolute left-1/2 top-1/2 z-50 h-5/6 w-5/6 -translate-x-1/2
						-translate-y-1/2 transform overflow-auto bg-red-400 text-center
					`}
					ref={notionScrollRef}
				>
					<div className="notion__container">
						<NotionRenderer
							recordMap={recordMap}
							fullPage={true}
							darkMode={false}
							rootPageId={notionKey}
							previewImages
							components={{
								Collection: CustomComponent,
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotionPage;
