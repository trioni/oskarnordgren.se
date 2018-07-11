import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Card, { CardBody } from '../components/Card'
import Name from '../components/Header/Name'
import './index.css'
import styles from './index.module.css'

const TemplateWrapper = ({ children, data }) => (
  <div className={styles.layout}>
    <Helmet
      title={`Hi | ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Container>
      <div className={styles.main}>
        <Card className="mb-6">
          <div className="row">
            <CardBody>
              <Name first="Hello" last="World" />
            </CardBody>
            <div className="end image-container">
              <img src="static/on.jpg" height="400" />
            </div>
          </div>
        </Card>
      </div>
    </Container>
    <div className={styles.content}>
      {children()}
    </div>
    <Footer social={data.allSocialJson.edges} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSocialJson {
      edges {
        node {
          id
          name
          url
          color
        }
      }
    }
  }
`
