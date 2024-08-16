import { NextRequest, NextResponse } from 'next/server';
import { getNotinoPage } from '@/src/components/notion';

export const GET = async (req: NextRequest) => {
	// const pageId = '102bccbdf4284728beab98d07d535478';
	const pageId = req.nextUrl.searchParams.get('page');

	if (pageId) {
		const data = await getNotinoPage(pageId);
		return NextResponse.json(data);
	} else {
		NextResponse.json(null);
	}
};
