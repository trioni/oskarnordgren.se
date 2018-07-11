import React from 'react'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Container from '../components/Container'
import Text from '../components/Text'
import styles from './index.module.css'

function getPageFragmentHtml(query) {
  return { __html: query.edges[0].node.html };
}

const IndexPage = ({ data }) => (
  <div>
    <Container isCentered>
      <div className={styles.body}>
        <Text isHtml>
          {getPageFragmentHtml(data.about)}
        </Text>
        <Text isHtml>
          {getPageFragmentHtml(data.focus)}
        </Text>
        <Text isHtml>
          {getPageFragmentHtml(data.education)}
        </Text>
        <Text isHtml>
          {getPageFragmentHtml(data.experience)}
        </Text>
      </div>
    </Container>
    <Container maxWidth="1220">
      <Projects title="Projects" projects={data.allProjectsJson.edges} />
    </Container>
    <Container maxWidth="1220">
      <Skills groups={data.allToolsJson.edges} />
    </Container>
  </div>
)

export default IndexPage

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          name
          url
          current
          tags
        }
      }
    }
    allToolsJson {
      edges {
        node {
          id
          items {
            name
            url
            current
          }
        }
      }
    }
    about: allMarkdownRemark(filter: {id: {regex: "/about/"}} limit: 1) {
      edges {
        node {
          id
          html
        }
      }
    }
    focus: allMarkdownRemark(filter: {id: {regex: "/focus/"}} limit: 1) {
      edges {
        node {
          id
          html
        }
      }
    }
    education: allMarkdownRemark(filter: {id: {regex: "/education/"}} limit: 1) {
      edges {
        node {
          id
          html
        }
      }
    }
    experience: allMarkdownRemark(filter: {id: {regex: "/experience/"}} limit: 1) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`
