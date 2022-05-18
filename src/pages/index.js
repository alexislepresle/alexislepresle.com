import * as React from "react"
import { useEffect } from 'react'
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import { StaticImage } from "gatsby-plugin-image"
import Expertises from "../components/Sections/Expertises.js"
import APropos from "../components/Sections/APropos"
import Contact from "../components/Sections/Contact"
import Projects from "../components/Sections/Projects.js"
import Testimonials from "../components/Sections/Testimonials.js"
import Blog from "../components/Sections/Blog.js"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// markup
const IndexPage = () => {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let scroll = window.scrollY;
    window.addEventListener('scroll', () => {
      scroll = window.scrollY
      for (let elt of document.querySelectorAll('.section')) {
        if (scroll > elt.offsetTop - (window.innerHeight / 2)) elt.classList.add('active')
        else elt.classList.remove('active')
      }
    });

    let i = 0;
    for (let word of document.querySelectorAll('span.word')) {
      word.style.animationDelay = i * 50 + 'ms';
      i++;
    }

    for (let item of document.querySelectorAll('.floating-object')) {
      gsap.from(item, {
        y: -100,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }

  });

  if (typeof document === "undefined") return <></>;

  return (
    <Layout>
      <Seo
        title="Alexis Lepresle"
        keywords={[`freelance`, `ecommerce`, `portfolio`, `shopify expert`]}
      />
      <div className="bg-cover">
        <div className="homepage-header relative overflow-hidden h-screen flex items-center justify-center pb-10 bg-cover" style={{ minHeight: '800px' }}>
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
                  <p className="text-2xl py-5"><span className="word">Hi,</span> <span className="word">I'm Alexis</span> <span className="word"><span className="wave">👋</span></span></p>
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
                    <span className="block mb-3 tracking-wide	"><span className="word">Développeur</span> <span className="word">Web</span> <span className="word">en</span> <span className="word">freelance</span></span>
                    <span className="text-indigo-600 tracking-wide inline-block">
                      <span><span className="word">Certifié</span> <span className="word">Expert</span> <span className="word">Shopify</span></span>
                      <span className="inline-block word">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 w-8 h-8 lg:w-12 lg:h-12" width="50" height="50" viewBox="0 0 66 66" fill="none">
                          <path d="M63.25 33L56.54 25.3275L57.475 15.18L47.5475 12.925L42.35 4.125L33 8.14L23.65 4.125L18.4525 12.8975L8.525 15.125L9.46 25.3L2.75 33L9.46 40.6725L8.525 50.8475L18.4525 53.1025L23.65 61.875L33 57.8325L42.35 61.8475L47.5475 53.075L57.475 50.82L56.54 40.6725L63.25 33ZM25.795 44.0275L19.25 37.4275C18.9951 37.1731 18.7928 36.8709 18.6548 36.5382C18.5168 36.2055 18.4458 35.8489 18.4458 35.4887C18.4458 35.1286 18.5168 34.772 18.6548 34.4393C18.7928 34.1066 18.9951 33.8044 19.25 33.55L19.4425 33.3575C20.515 32.285 22.275 32.285 23.3475 33.3575L27.775 37.8125L41.9375 23.6225C43.01 22.55 44.77 22.55 45.8425 23.6225L46.035 23.815C47.1075 24.8875 47.1075 26.62 46.035 27.6925L29.755 44.0275C28.6275 45.1 26.895 45.1 25.795 44.0275Z" fill="#4F46E5" />
                        </svg>
                      </span>
                    </span>
                  </h1>
                  <p className="mx-auto my-5 text-lg text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl hidden">
                    J'accompagne les e-commerçants ambitieux à développer et croitre leur boutique Shopify
                  </p>
                  <div className="flex align-center justify-center space-x-5 mt-10">
                    <a href="/#expertises" className="btn" style={{ boxShadow: "0px 4px 100px 0px rgba(0, 0, 0, 0.1)" }}>
                      Mon expertise
                    </a>
                    <a href="/contact" className="btn btn-gradient">
                      Me contacter ➝
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
    </Layout>
  )
}

export default IndexPage
