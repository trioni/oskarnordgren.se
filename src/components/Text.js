import React from 'react'
import classNames from 'classnames'
import styles from './Text.module.css'

const Text = ({ isBody = false, className, children, tagName = 'p', isHtml = false }) => {
  const classes = classNames(styles.root, className, {
    [styles.isBody]: isBody,
    [styles.isHtml]: isHtml,
  })

  if (isHtml) {
    return (
      <div dangerouslySetInnerHTML={children} className={classes} />
    )
  }

  const TagName = tagName;

  return (
    <TagName className={classes}>
      {children}
    </TagName>
  )
}

export default Text