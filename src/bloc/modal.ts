import { Bloc, BlocAction } from '@bloc-js/bloc';
import { createHooks } from '@bloc-js/react-bloc';
import { ExtendedRecordMap } from 'notion-types';
import axios from 'axios';

export type ModalState = {
	openYn: boolean;
	notionPage?: ExtendedRecordMap;
	pageId?: string;
};

export class ModalBloc extends Bloc<ModalState> {
	constructor(initialState = { openYn: false }) {
		super(initialState);
	}
}

export const { useBloc, useState } = createHooks<ModalState>(
	'modal',
	() => new ModalBloc({ openYn: false }),
);

type Action = BlocAction<ModalState>;

export const close: Action = (_b, next) => next({ openYn: false });
export const open: Action = async (_b, next) => {
	return next({
		openYn: true,
		notionPage: (await About(_b.value.pageId!)) as ExtendedRecordMap,
		pageId: _b.value.pageId,
	});
};

const About = async (page: string) => {
	const params = { page: page };
	const res = await axios.get(window.location.origin + `/api/notion`, { params });
	return res.data;
};
