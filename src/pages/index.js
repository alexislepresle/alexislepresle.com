import * as React from "react"
import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js"
import { StaticImage } from "gatsby-plugin-image"
import Expertises from "../components/Sections/Expertises.js"
import APropos from "../components/Sections/APropos"
import Contact from "../components/Sections/Contact"
import Projects from "../components/Sections/Projects.js"
import Testimonials from "../components/Sections/Testimonials.js"
import Blog from "../components/Sections/Blog.js"

// markup
const IndexPage = () => {

  if (typeof document === "undefined") return <></>;

  return (
    <>
      <Navbar />
      <div className="bg-cover">
        <div className="homepage-header relative overflow-hidden h-screen flex items-center justify-center pb-10" style={{ minHeight: '750px' }}>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8sm:pb-16 md:pb-20 lg:w-full">
              <main className="mx-auto px-4 sm:mt-12 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center">
                <div className="text-center">
                  <div className="bg-white rounded-full me-img">
                    <StaticImage
                      src="../images/me-apple-emoji.png"
                      width={250}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="A Gatsby astronaut"
                      className="md:w-42 w-32"
                    />
                  </div>
                  <p className="text-2xl py-5">Hi, I'm Alexis 👋</p>
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
                    <span className="block mb-6 tracking-wide	">Développeur Web en freelance</span>
                    <span className="text-indigo-600 tracking-wide inline">
                      <span>Certifié Expert Shopify</span>
                      <span className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 w-8 h-8 lg:w-12 lg:h-12" width="50" height="50" viewBox="0 0 66 66" fill="none">
                          <path d="M63.25 33L56.54 25.3275L57.475 15.18L47.5475 12.925L42.35 4.125L33 8.14L23.65 4.125L18.4525 12.8975L8.525 15.125L9.46 25.3L2.75 33L9.46 40.6725L8.525 50.8475L18.4525 53.1025L23.65 61.875L33 57.8325L42.35 61.8475L47.5475 53.075L57.475 50.82L56.54 40.6725L63.25 33ZM25.795 44.0275L19.25 37.4275C18.9951 37.1731 18.7928 36.8709 18.6548 36.5382C18.5168 36.2055 18.4458 35.8489 18.4458 35.4887C18.4458 35.1286 18.5168 34.772 18.6548 34.4393C18.7928 34.1066 18.9951 33.8044 19.25 33.55L19.4425 33.3575C20.515 32.285 22.275 32.285 23.3475 33.3575L27.775 37.8125L41.9375 23.6225C43.01 22.55 44.77 22.55 45.8425 23.6225L46.035 23.815C47.1075 24.8875 47.1075 26.62 46.035 27.6925L29.755 44.0275C28.6275 45.1 26.895 45.1 25.795 44.0275Z" fill="#4F46E5" />
                        </svg>
                      </span>
                    </span>
                  </h1>
                  <p className="mx-auto my-5 text-lg text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                    J'accompagne les e-commerçants ambitieux à développer et croitre leur boutique Shopify
                  </p>
                  <div className="flex align-center justify-center">
                    <a href="/#expertises" className="shadow m-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-black bg-white hover:bg-black hover:text-white" style={{ boxShadow: "0px 4px 100px 0px rgba(0, 0, 0, 0.1)" }}>
                      Mon expertise
                    </a>
                    <a href="/contact" className="btn-gradient m-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white hover:bg-indigo-700">
                      Me contacter
                      <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.859 10.9425C13.8119 10.9908 13.6341 11.1975 13.4685 11.3675C12.4976 12.4367 9.96468 14.1867 8.63898 14.7208C8.43765 14.8067 7.92864 14.9883 7.65668 15C7.39608 15 7.14767 14.94 6.91061 14.8183C6.61511 14.6483 6.37806 14.3808 6.24817 14.065C6.16455 13.8458 6.03466 13.19 6.03466 13.1783C5.90477 12.4608 5.83333 11.295 5.83333 10.0067C5.83333 8.77917 5.90477 7.66083 6.01112 6.9325C6.02329 6.92083 6.15319 6.10583 6.29525 5.82667C6.55585 5.31667 7.06486 5 7.60959 5H7.65668C8.01144 5.0125 8.7575 5.32917 8.7575 5.34083C10.0118 5.87583 12.4862 7.54 13.4807 8.64583C13.4807 8.64583 13.7608 8.93 13.8825 9.1075C14.0725 9.3625 14.1667 9.67833 14.1667 9.99417C14.1667 10.3467 14.0603 10.675 13.859 10.9425Z" fill="#F7F6F8" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Expertises />
      <Testimonials />
      <APropos />
      <Contact />
      <Blog />
      <Footer />
    </>
  )
}

export default IndexPage
