'use client'

import {Bloc, BlocAction} from "@bloc-js/bloc";
import {createHooks} from "@bloc-js/react-bloc";

type Action = BlocAction<boolean>;

export class DarkThemeBloc extends Bloc<boolean> {
    constructor() {
        super(localStorage.theme !== 'light');
    }
}

export const {getBloc, useBloc, useState} = createHooks<boolean>(
    "theme",
    () => new DarkThemeBloc()
);

export const chgDart = (): Action => (b, next) => {
    localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light';
    next(localStorage.theme === 'dark');
};