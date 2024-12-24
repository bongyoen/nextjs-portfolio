import { PJ_MAP, ProjectType } from '@/src/model/UNION_STR';
import ProjectItem from '@/src/components/cmmn/projectItem';

export default function Projects() {
	return (
		<section className="mx-auto mb-12 min-h-screen max-w-5xl">
			<h2 className="mb-12 mt-8 w-full text-center text-4xl font-black">My Projects</h2>
			<div className="mx-auto w-full">
				<div dir="ltr" data-orientation="horizontal">
					<div
						className={`
							grid gap-8 text-lg
							lg:grid-cols-3
							xl:mt-8
						`}
					>
						{Object.entries(PJ_MAP).map(([key, value]) => {
							const pj = value as ProjectType;
							return (
								<ProjectItem
									alt={pj.nm}
									img={pj.img}
									notion={pj.notion}
									type={pj.wkType}
									mainTag={pj.mainTag}
									hashTags={pj.tag}
									key={key}
								>
									{pj.desc}
								</ProjectItem>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
