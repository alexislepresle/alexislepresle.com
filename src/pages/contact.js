import * as React from "react"
import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js"
import { Widget } from '@typeform/embed-react'

// markup
const IndexPage = () => {
    return (
        <>
            <Navbar />
            <Widget id="uAtROmtw" style={{ height: '100vh' }} />
            <Footer />
        </>
    )
}

export default IndexPage
