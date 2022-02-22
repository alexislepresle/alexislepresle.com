import * as React from "react"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import { StaticImage } from "gatsby-plugin-image"
import Expertises from "../components/Sections/Expertises.js"
import APropos from "../components/Sections/APropos"
import Support from "../components/Sections/Support"
import Projects from "../components/Sections/Projects.js"
import Testimonials from "../components/Sections/Testimonials.js"
import Blog from "../components/Sections/Blog.js"
import Contact from "../components/Sections/Contact.js"

// markup
const IndexPage = () => {

  if (typeof document === "undefined") return <></>;

  return (
    <>
      <Header />
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full">
            <main class="mx-auto px-4 sm:mt-12 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center">
              <div class="text-center">
                <StaticImage
                  src="../images/me1.png"
                  width={1000}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  className="md:w-56 w-32"
                />
                <p className="text-2xl py-5">Hi, I'm Alexis 👋</p>
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
                  <span class="block">Développeur Web en freelance</span>
                  <span class="block text-indigo-600">Certifié Expert Shopify</span>
                </h1>
                <p class="mx-auto my-5 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-2xl">
                  J'accompagne des e-commerçants à développer et croitre leur boutique <span class="text-indigo-900">Shopify</span>
                </p>
                <a href="/contact" className="my-10 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Me contacter
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Projects />
      <Testimonials />
      <Expertises />
      <Support />
      <APropos />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage
