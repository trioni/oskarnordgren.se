import React from 'react'
import classNames from 'classnames'
import styles from './Container.module.css'

const Container = props => {
  const { isNarrow = false, children, isCentered = true, maxWidth = null } = props
  let inlineStyles = {}
  const classes = classNames(styles.root, {
    [styles.isNarrow]: isNarrow,
    [styles.isCentered]: isCentered
  })
  console.log('Classes ---> ', classes, styles)

  if (maxWidth) {
    inlineStyles.maxWidth = maxWidth
  }

  return (
    <div className={classes} style={inlineStyles}>
      {children}
    </div>
  )
}

export default Container