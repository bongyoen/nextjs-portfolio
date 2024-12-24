'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

export type MyButtonProps = {
	size: 'large' | 'medium' | 'small';
	color: 'primary' | 'negative' | 'default';
	children: ReactNode; // children 속성 추가
};

export default function MyButton(props: MyButtonProps) {
	const { size, color, children } = props;

	const testAlert = () => {};

	const colorProp = {
		primary: `border: 3px solid #55EFC4; background-color: #55EFC4`,
		negative: `border: 3px solid #FAB1A0; color: #D63031; background-color: #FAB1A0`,
		default: ``,
	};

	const sizeProp = {
		small: `width: 90px; height: 35px;`,
		medium: `width: 120px; height: 40px;`,
		large: `width: 185px; height: 45px; background-color: white; font-weight: bold;`,
	};

	const Button = styled.button`
		${() => colorProp[color] ?? ''};
		${() => sizeProp[size] ?? ''};
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 13px;
		cursor: pointer;

		&:active {
			filter: brightness(70%);
		}
	`;

	return (
		<Button type="button" onClick={() => testAlert()}>
			{children}
		</Button>
	);
}
