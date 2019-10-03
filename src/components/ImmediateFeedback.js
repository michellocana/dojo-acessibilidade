import React from 'react'

import styles from './ImmediateFeedback.module.css'

const ImmediateFeedback = props => {
  return (
    <div className={styles.container}>
      <img
        src='./images/immediate-feedback.gif'
        alt='Comparação de feedback instantâneo'
        style={{
          height: '73vh',
          maxHeight: 472
        }}
      />
    </div>
  )
}

export default ImmediateFeedback
