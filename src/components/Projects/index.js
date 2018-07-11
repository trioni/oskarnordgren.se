import React from 'react'
import Card from '../Card'
import styles from './Projects.module.css'

const ProjectTags = ({ tags }) => {
  if (!tags) return null;
  return (
    <ul>
      {tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  )
}

const Projects = ({ projects, title }) => {
  return (
    <div>
      {title && <h2 className={`title beta ${styles.title}`}>{title}</h2>}
      <div className={styles.projectsWrapper}>
        {projects.map(node => {
          return (
            <Card className={styles.project} key={node.node.id}>
              <article>
                <a href={node.node.url} className={styles.projectLink} target="_blank">
                  <img src={`static/project-${node.node.id}.jpg`} className={styles.projectImg} />
                  <div className={styles.projectInfo}>
                    <h3 className={`title gamma ${styles.projectTitle}`}>{node.node.name}</h3>
                    <ProjectTags tags={node.node.tags} />
                  </div>
                </a>
              </article>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default Projects
