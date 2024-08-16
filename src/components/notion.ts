import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI();

export async function getNotinoPage(rootPageId: string) {
	return await notion.getPage(rootPageId);
}