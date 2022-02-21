import * as React from "react"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import { Widget } from '@typeform/embed-react'

// markup
const IndexPage = () => {
    return (
        <>
            <Header />
            <Widget id="uAtROmtw" style={{ height: '100vh' }} />
            <Footer />
        </>
    )
}

export default IndexPage
