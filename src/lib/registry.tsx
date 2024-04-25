'use client'

import {ServerStyleSheet, StyleSheetManager} from "styled-components";
import React, {useState} from 'react'
import {useServerInsertedHTML} from 'next/navigation'
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
                                                     children,
                                                 }: {
    children: React.ReactNode
}) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return styles
    })
    // ESLint: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.(react/jsx-no-useless-fragment)
    if (typeof window !== 'undefined') return children

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    )
}