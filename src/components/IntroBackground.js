import React from 'react'

import styles from './IntroBackground.module.css'

const IntroBackground = props => {
  return (
    <div className={styles.container}>
      <img src='./images/background.jpg' alt='' className={styles.image} />
    </div>
  )
}

export default IntroBackground
