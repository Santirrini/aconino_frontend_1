import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

export const metadata = {
    title: 'Payload Admin',
}

type Args = {
    children: React.ReactNode
}

import { importMap } from './admin/importMap'

const serverFunction = async (args: any) => {
    'use server';
    return handleServerFunctions({
        ...args,
        config,
        importMap,
    })
}

const Layout = ({ children }: Args) => {
    return (
        <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
            {children}
        </RootLayout>
    )
}

export default Layout
