"use client";

import {PropsWithChildren} from "react";
import {ThemeProvider} from "styled-components";
import StyledComponentsRegistry from "./registry";
import theme from "../styles/theme";

export default function Providers(props: PropsWithChildren) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{props!.children}</ThemeProvider>
        </StyledComponentsRegistry>
    );
}

