import { ExtendedRecordMap } from 'notion-types';
import NotionPage from '@/src/components/notion/notionPage';
import { Suspense } from 'react';
import Loading from '@/src/app/projects/@notion/(.)project/[id]/loading';

export type PartialSelectResponseList = [PartialSelectResponse];
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
export type PartialSelectResponse = {
	id: string;
	name: string;
	color: SelectColor;
};

const Notion_desc = async (page: string) => {
	const params = new URLSearchParams({ page: page });
	const res = await fetch(`${process.env.BASE_URL}/api/notion_desc?${params.toString()}`);
	return await res.json();
};

const About = async (page: string) => {
	const params = new URLSearchParams({ page: page });
	const res = await fetch(`${process.env.BASE_URL}/api/notion?${params.toString()}`);
	return await res.json();
};

// const Notion_desc = async (page: string) => {
// 	const params = { page: page };
// 	const res = await axios.get(`${process.env.BASE_URL}` + `/api/notion_desc`, { params });
// 	return res.data;
// };

// const About = async (page: string) => {
// 	const params = { page: page };
// 	const res = await axios.get(`${process.env.BASE_URL}` + `/api/notion`, { params });
// 	return res.data;
// };

async function Page({ params }: any) {
	const {id} = await params;

	console.log('id : ', id);

	const skills = (await Notion_desc(id)) as PartialSelectResponseList;
	const recordMap = (await About(id)) as ExtendedRecordMap;

	return (
		<>
			<Suspense fallback={<Loading />}>
				<NotionPage notionKey={id} skills={skills} recordMap={recordMap} />
			</Suspense>
		</>
	);
}

export default Page;
