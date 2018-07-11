import React from 'react'
import styles from './Skills.module.css'

const Skills = ({ groups }) => {
  return (
    <div className={styles.root}>
      {groups.map(group => {
        return (
          <dl className={styles.group} key={group.node.id}>
            <dt className={`${styles.title} beta title`}>{group.node.id}</dt>
            {group.node.items.map(item => (
              <dd key={item.name} className={styles.tag}>{item.name}</dd>
            ))}
          </dl>
        )
      })}
    </div>
  )
}

export default Skills