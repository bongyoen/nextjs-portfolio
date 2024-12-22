import { Client } from '@notionhq/client';

export const notion_client = new Client({
	auth: process.env.NOTION_TOKEN,
});

