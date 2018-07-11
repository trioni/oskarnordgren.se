import React from 'react'
import classNames from 'classnames'
import styles from './Card.module.css'

const Card = ({ children, className }) => {
  const classes = classNames(styles.root, className);
  return (
    <div className={classes}>
      {children}
    </div>
  )
}


export const CardBody = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}

export default Card