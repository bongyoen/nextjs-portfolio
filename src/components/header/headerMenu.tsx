import { DarkBtn } from '@/src/components/darkBtn';
import MenuBtn from '@/src/components/header/menuBtn';

export default function HeaderMenu() {
	return (
		<div className="flex gap-x-5">
			<nav
				className={`
					flex items-center gap-x-8 text-sm
					dark:text-white
				`}
			>
				<MenuBtn link="/">Home</MenuBtn>
				<MenuBtn link="/projects">Projects</MenuBtn>
				<MenuBtn link="/contact">Contact</MenuBtn>
			</nav>
			<DarkBtn />
		</div>
	);
}
