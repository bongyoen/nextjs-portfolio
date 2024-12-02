import Base from '@/src/components/base';
import AboutMe from '@/src/components/home/aboutMe';
import Intro from '@/src/components/home/intro';
import AboutProject from '@/src/components/home/aboutProject';
import ContactLink from '@/src/components/home/contactLink';
import MapTest from '@/src/components/mapTest';

export default function Home() {
	return (
		<>
			<Base>
				<Intro />
				<AboutMe />
				<AboutProject />
				<ContactLink />
				{/* <MapTest/> */}
			</Base>
		</>
	);
}
