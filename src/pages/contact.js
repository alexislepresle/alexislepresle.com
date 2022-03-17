import * as React from "react"
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import { Widget } from '@typeform/embed-react'

// markup
const IndexPage = () => {
    return (
        <Layout>
            <Seo
                title={"Contact - Alexis Lepresle"}
                description={"Contacter un expert shopify en france"}
                keywords={[`freelance`, `ecommerce`, `portfolio`, `shopify expert`]}
            />
            <Widget id="uAtROmtw" style={{ height: '100vh' }} />
        </Layout>
    )
}

export default IndexPage
