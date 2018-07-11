import React from 'react'
import classNames from 'classnames'
import styles from './Footer.module.css'

const Footer = ({ social }) => {
  return (
    <footer className={styles.root}>
      {social.map(item => {
        const itemClasses = classNames(styles.item)
        const linkClasses = classNames(styles.link, styles.social, styles[`social-${item.node.id}`])
        return (
          <article className={itemClasses} key={item.node.id}>
            <a href={item.node.url} className={linkClasses} style={{ backgroundColor: item.node.color }}>
              <h2>{item.node.name}</h2>
            </a>
          </article>
        )
      })}
    </footer>
  )
}

export default Footer