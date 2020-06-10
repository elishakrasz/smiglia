import React from "react"
import Layout from "../components/Layout"
// import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export const query = graphql`
query {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Awesome Hampi 2000"
        info="Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site"
      >
        <AniLink paintDrip hex="#AEECEE" className="btn-white" to="/places">explore places</AniLink>

      </Banner>
    </StyledHero>
    <About />
    <Tips />
  </Layout>
)


// export const query = graphql`
//   query {
//     defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 4160) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `