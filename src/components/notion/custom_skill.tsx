'use client';


export const CustomSkillComponent = ({ value }: any) =>
{
	console.log("value : ", value);

	return (
		<div className="skill-container">
			<h3>Skill</h3>
			<p>{value}</p>
		</div>
	);
};

