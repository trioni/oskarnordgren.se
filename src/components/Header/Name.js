import React from 'react'
import styles from './Name.module.css'

const Name = ({ first, last }) => {
  return (
    <div>
      <div className={styles.firstName}>{first}</div>
      <div className={styles.lastName}>{last}</div>
    </div>
  );
};

export default Name;