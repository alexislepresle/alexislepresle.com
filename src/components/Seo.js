import React from 'react'
import { Helmet } from "react-helmet"
import coverDefault from "../images/website.png"
import icon from "../images/icon-logo.png"

import {
    url,
    defaultTitle,
    defaultDescription,
    author,
    themeColor
} from '../data/config'

const SEO = ({
    description,
    title,
    keywords,
    cover
}) => {
    console.log('coverDefault', coverDefault)
    return (
        <Helmet>
            <html lang="fr" />
            <title>{title ? title : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${icon}`}
            />
            <link
                rel="icon"
                type="image/png"
                href={`${icon}`}
                sizes="32x32"
            />
            <link
                rel="icon"
                type="image/png"
                href={`${icon}`}
                sizes="16x16"
            />
            <link
                rel="mask-icon"
                href={`${icon}`}
                color="#ff4400"
            />
            <meta name="theme-color" content={themeColor} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? title : defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="twitter:card" content={`summary`} />
            <meta property="twitter:creator" content={author} />
            <meta property="twitter:title" content={title ? title : defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content={cover ? `${url}${cover}` : `${url}${coverDefault}`} />
            <meta name="keywords" content={keywords} data-react-helmet="true" />
        </Helmet>
    )
}

export default SEO;
