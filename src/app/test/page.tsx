import { getNotinoPage } from '@/src/components/notion';
import NotionPage from '@/src/components/notion/notionPage';


import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';


export default function Test() {
	const pageId = '102bccbdf4284728beab98d07d535478';

	const About = async () => {
		const data = await getNotinoPage(pageId);
		console.log('hi~2');
		return (
			<main>
				<NotionPage recordMap={data} rootPageId={pageId} />
			</main>
		);
	};
	return (
		<About />
	);
}
