import React from 'react'
import Layout from "./src/components/Layout"
import "./src/styles/global.css"
import "nprogress/nprogress.css";

export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>
}