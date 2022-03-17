import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"
// markup
const NotFoundPage = () => {
  return (
    <Layout title={"404"}>
      <h1 className="h3">Page not found</h1>
      <Link to="/">Back to home</Link>.
    </Layout >
  )
}

export default NotFoundPage
