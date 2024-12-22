import { Bloc, BlocAction } from '@bloc-js/bloc';
import { createHooks } from '@bloc-js/react-bloc';
import { ExtendedRecordMap } from 'notion-types';
import axios from 'axios';

export type ModalState = {
	openYn: boolean;
	notionPage?: ExtendedRecordMap;
	pageId?: string;
};

export const { getBloc, useBloc, useState } = createHooks<ModalState>(
	'modal',
	() => new ModalBloc({ openYn: false }),
);

type Action = BlocAction<ModalState>;
type OACtion = {
	b: Bloc<ModalState>;
	next: (s: ModalState) => void;
	notion: string;
};
export const close: Action = (_b, next) => next({ openYn: false });
export const open = async ({ b, next, notion }: OACtion) => {
	return next({
		openYn: true,
		notionPage: (await About(notion)) as ExtendedRecordMap,
		pageId: notion,
	});
};

export class ModalBloc extends Bloc<ModalState> {
	constructor(initialState = { openYn: false }) {
		super(initialState);
	}
}

const About = async (page: string) => {
	const params = { page: page };
	const res = await axios.get(window.location.origin + `/api/notion`, { params });
	return res.data;
};
