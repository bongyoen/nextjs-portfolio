import AboutMe from '@/src/components/home/aboutMe';
import Intro from '@/src/components/home/intro';
import AboutProject from '@/src/components/home/aboutProject';
import ContactLink from '@/src/components/home/contactLink';

export default function Home() {
	return (
		<>
			<Intro />
			<AboutMe />
			<AboutProject />
			<ContactLink />
			{/* <MapTest/> */}
		</>
	);
}
