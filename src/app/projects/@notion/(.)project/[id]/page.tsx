import axios from 'axios';
import { ExtendedRecordMap } from 'notion-types';
import NotionPage from '@/src/components/notion/notionPage';

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
	const params = { page: page };
	const res = await axios.get('http://127.0.0.1:3000' + `/api/notion_desc`, { params });
	return res.data;
};

const About = async (page: string) => {
	const params = { page: page };
	const res = await axios.get('http://127.0.0.1:3000' + `/api/notion`, { params });
	return res.data;
};

async function Page({ params }: any) {
	const notionKey = params.id;

	const skills = (await Notion_desc(notionKey)) as PartialSelectResponseList;
	const recordMap = (await About(notionKey)) as ExtendedRecordMap;

	return <NotionPage notionKey={notionKey} skills={skills} recordMap={recordMap} />;
}

export default Page;
