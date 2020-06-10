import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Awesome Hampi 2000"
        info="Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site"
      >
        <Link to="/places" className="btn-white">
          explore places
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Tips />
  </Layout>
)
