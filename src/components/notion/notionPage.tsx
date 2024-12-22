'use client';

import '../notion/notion1.scss';
import React, { useEffect } from 'react';
import { NotionRenderer } from 'react-notion-x';
import Loading from '@/src/components/loading';
import axios from 'axios';

interface RendererProps {
	recordMap: any; // 임의로 any
	rootPageId: string;
	// skills: PartialSelectResponseList;
}

type SelectColor =
	| 'default'
	| 'gray'
	| 'brown'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'blue'
	| 'purple'
	| 'pink'
	| 'red';

export type PartialSelectResponseList = [PartialSelectResponse];

type PartialSelectResponse = {
	id: string;
	name: string;
	color: SelectColor;
};

const Notion_desc = async (page: string) => {
	const params = { page: page };
	const res = await axios.get(window.location.origin + `/api/notion_desc`, { params });
	return res.data;
};

export const NotionPage = ({ recordMap, rootPageId }: RendererProps) => {
	const [skills, setSkills] = React.useState<PartialSelectResponseList>();
	useEffect(() => {
		Notion_desc(rootPageId).then((value) => {
			console.log(value);
			setSkills(value as PartialSelectResponseList);
		});
	}, [rootPageId]);

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
		<div className="notion__container">
			<NotionRenderer
				recordMap={recordMap}
				fullPage={true}
				darkMode={false}
				rootPageId={rootPageId}
				previewImages
				components={{
					Collection: CustomComponent,
				}}
			/>
		</div>
	);
};

export default NotionPage;
