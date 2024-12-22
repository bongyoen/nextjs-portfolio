import { NextRequest, NextResponse } from 'next/server';
import { notion_client } from '@/src/util/notion_client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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
export const GET = async (req: NextRequest) => {
	const pageId = req.nextUrl.searchParams.get('page');
	const value = await notion_client.pages.retrieve({ page_id: pageId! });
	let skills = (value as PageObjectResponse).properties['Skill'];

	skills = skills as {
		type: 'multi_select';
		multi_select: Array<{
			id: string;
			name: string;
			color: SelectColor;
		}>;
		id: string;
	};

	return NextResponse.json(skills.multi_select);
};
