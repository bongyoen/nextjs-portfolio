import { SkillCategories, SkillType } from '@/src/model/UNION_STR';
import React from 'react';

const Skills = ({ skills }: { skills: SkillType[] }) => {
	const skillCategories: SkillCategories = skills.reduce(
		(acc, skill) => {
			acc[skill.skillType] = acc[skill.skillType] || [];
			acc[skill.skillType].push(skill);
			return acc;
		},
		{ strong: [], knowledgeable: [], experienced: [] } as SkillCategories,
	);
	const SkillMap = {
		STRONG: skillCategories.strong,
		KNOWLEDGEABLE: skillCategories.knowledgeable,
		EXPERIENCED: skillCategories.experienced,
	};

	return (
		<>
			<div
				className={`
					grid gap-3 text-lg
					lg:grid-cols-3
					xl:mt-3
				`}
			>
				{Object.entries(SkillMap).map(([key, arr]) => {
					return (
						<div key={key}>
							<div
								className={`
									bg-card text-card-foreground group relative mx-auto max-w-sm
									overflow-hidden rounded-lg border shadow-sm transition-all
									hover:shadow-lg
								`}
							>
								<div className="flex h-16 flex-col gap-y-2 px-4 py-2">
									<div
										className={`
											focus:ring-ring
											bg-primary text-primary-foreground
											hover:bg-primary/80
											absolute left-5 top-4 mb-2 inline-flex w-full items-center
											rounded-full border border-transparent px-2.5 py-0.5 text-sm
											font-medium transition-colors
											focus:outline-none focus:ring-2 focus:ring-offset-2
										`}
									>
										<span className={`w-full`}>{key}</span>
									</div>
								</div>
								<div>
									{arr.map((value) => {
										return (
											<div key={value.skill} className="bg-accent group rounded-md p-2">
												<span className="text-lg font-bold leading-none">{value.skill}</span>
												<p className="keep-all text-sm">{value.skillDesc}</p>
											</div>
										);
									})}
								</div>
							</div>
							{/* <h1>{key}</h1> */}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Skills;
