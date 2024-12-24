import React from 'react';
import { BtnSelecType } from '@/src/components/home/about_me/aboutMe';

const About_btn = ({
	title,
	btnSelect,
	setBtnSelect,
	targetNum,
}: {
	title: string;
	btnSelect: BtnSelecType;
	setBtnSelect: React.Dispatch<React.SetStateAction<BtnSelecType>>;
	targetNum: BtnSelecType;
}) => {
	return (
		<button
			type="button"
			onClick={() => setBtnSelect({ target: targetNum.target })}
			className={`
				${btnSelect.target === targetNum.target ? 'bg-blue-600' : ''}
				ring-offset-background
				focus-visible:ring-ring
				data-[state=active]:bg-primary
				inline-flex w-48 items-center justify-center whitespace-nowrap rounded-full
				px-3 py-1.5 font-medium text-black transition-all
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
				disabled:pointer-events-none disabled:opacity-50
				data-[state=active]:shadow-sm
				max-lg:border-2 max-lg:border-solid
				lg:w-auto
			`}
		>
			{title}
		</button>
	);
};

export default About_btn;
