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
            <main class="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-wrap items-center justify-center">
              <div class="sm:text-center lg:text-left md:flex-1">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                  <span class="block">Développeur Web en freelance</span>
                  <span class="block text-indigo-600">Certifié Expert Shopify</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  J'accompagne des e-commerçants à développer et croitre leur boutique <span class="text-indigo-900">Shopify</span>
                </p>
              </div>
              <div class="md:flex-1 rounded-xl ">
                <StaticImage
                  src="../images/IMG_8933.jpg"
                  width={800}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-xl "
                />
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
