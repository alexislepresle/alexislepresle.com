import * as React from "react"
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"

// markup
const IndexPage = () => {
    return (
        <Layout>
            <Seo title={"Mentions légales"} />
            <div class="max-w-4xl mx-auto px-4 sm:px-6 xl:max-w-8xl xl:px-0">
                <div class="px-4 py-14 sm:py-16 lg:py-20">
                    <div class="prose prose-sm max-w-[37.5rem] mx-auto">
                        <div class="text-center my-10">
                            <h1 class="text-3xl sm:text-4.5xl font-extrabold tracking-tight mb-4">
                                Mentions légales
                            </h1>
                        </div>
                        <p>Alexis Lepresle</p>
                        <p>SIREN: 832090179 SIRET: 83209017900017</p>
                        <span>Site internet : </span><a href="https://alexislepresle.com">https://alexislepresle.com</a>
                        <br />
                        <br />
                        <span>Contact e-mail:</span> <a href="mailto:contact@alexislepresle.com">contact@alexislepresle.com</a>
                        <p>Conform&eacute;ment &agrave; la loi &laquo; Informatique et Libert&eacute;s &raquo; N&deg; 78-17 du 6 Janvier 1978, vous b&eacute;n&eacute;ficiez d&rsquo;un droit d&rsquo;acc&egrave;s, de rectification et d&rsquo;opposition que vous pouvez exercer en vous adressant &agrave; : contact@alexislepresle.com</p>
                        <p>En vertu de l'article 6 de la loi n&deg; 2004-575 du 21 juin 2004 pour la confiance dans l'&eacute;conomie num&eacute;rique, il est pr&eacute;cis&eacute; aux utilisateurs du site https://www.alexislepresle.com l'identit&eacute; des diff&eacute;rents intervenants dans le cadre de sa r&eacute;alisation et de son suivi : Propri&eacute;taire du site internet: Alexis Lepresle - Repr&eacute;sent&eacute;e par Alexis Lepresle, G&eacute;rant H&eacute;bergeur : https://github.com/</p>
                        <p>Reproduction interdite, tous droits r&eacute;serv&eacute;s.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
