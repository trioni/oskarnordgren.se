import React from 'react'
import Link from 'gatsby-link'
import Name from './Name'
import Container from '../Container'
import styles from './Header.module.css'

const Header = () => (
  <div className={styles.root}>
    <svg id="svg"></svg>
    <Container isNarrow>
      <div className={styles.main2}>
        <Name first="Oskar" last="Nordgren" />
      </div>
    </Container>
  </div>
)

export default Header
