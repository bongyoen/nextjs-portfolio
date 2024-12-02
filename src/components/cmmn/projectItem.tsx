'use client';

import Image from 'next/image';
import React, { ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import * as Modal from '../../bloc/modal';
import { ProjectWkType } from '@/src/components/model/UNION_STR';


type ProjectItemType = {
	alt: string;
	img: StaticImport;
	children: ReactNode;
	type: ProjectWkType;
	mainTag: string;
	hashTags: string[];
	notion: string;
};

export default function ProjectItem({
	alt,
	children,
	type,
	hashTags,
	mainTag,
	img,
	notion,
}: ProjectItemType) {
	const bloc = Modal.useBloc();

	const open = () => {
		return bloc.next((b, next) => Modal.open({ b, next, notion }));
	};

	return (
		<div
			data-state="active"
			data-orientation="horizontal"
			role="tabpanel"
			aria-labelledby="radix-:r4:-trigger-All"
			id="radix-:r4:-content-All"
			tabIndex={0}
			className={`
				ring-offset-background
				focus-visible:ring-ring
				mt-2
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
			`}
			style={{
				animationDuration: '0s',
			}}
		>
			<div className="relative">
				<div
					className={`
						bg-card text-card-foreground group relative mx-auto max-w-sm
						overflow-hidden rounded-lg border shadow-sm transition-all
						hover:shadow-lg
					`}
				>
					<div className="bg-primary/20 flex flex-col space-y-1.5 p-0">
						<div className="relative flex h-52 w-full items-center justify-center">
							<button className={'flex w-full flex-row justify-around'} onClick={open}>
								<Image
									alt={alt}
									width="200"
									height="120"
									decoding="async"
									data-nimg="1"
									className={`
										absolute bottom-4 mx-auto h-auto max-h-32 w-auto rounded-md
										object-center shadow-2xl
									`}
									src={img}
									style={{
										color: ' transparent',
									}}
								/>
							</button>
						</div>
					</div>
					<div className="flex h-32 flex-col gap-y-2 px-4 py-2">
						<div
							className={`
								focus:ring-ring
								bg-primary text-primary-foreground
								hover:bg-primary/80
								absolute left-5 top-4 mb-2 inline-flex items-center rounded-full border
								border-transparent px-2.5 py-0.5 text-sm font-medium transition-colors
								focus:outline-none focus:ring-2 focus:ring-offset-2
							`}
						>
							{mainTag}
						</div>
						<h4 className="text-2xl font-bold">{alt}</h4>
						<p className="text-muted-foreground break-keep text-sm">{children}</p>
					</div>
					<div
						className={`
							flex w-full flex-col items-center gap-y-2 p-6 pt-0 text-start text-sm
						`}
					>
						<p className="w-full text-start">{type} 프로젝트</p>
						<div className=" flex w-full flex-wrap gap-x-1.5 text-start">
							{hashTags.map((value) => (
								<span key={value}>#{value}</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
