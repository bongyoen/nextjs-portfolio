'use client';

import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import '../notion/notion1.scss';

interface RendererProps {
	recordMap: any; // 임의로 any
	rootPageId: string;
}

export const NotionPage = ({ recordMap, rootPageId }: RendererProps) => {
	return (
		<div className="notion__container">
			<NotionRenderer
				recordMap={recordMap}
				fullPage={true}
				darkMode={false}
				rootPageId={rootPageId}
				previewImages
			/>
		</div>
	);
};

export default NotionPage;
