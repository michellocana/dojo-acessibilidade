import React from 'react'
import { Image } from 'spectacle'

import styles from './FullImage.module.css'

function FullImage({ src, style = {} }) {
  return (
    <div className={styles.container}>
      <Image src={src} className={styles.image} style={style} />
    </div>
  )
}

export default FullImage
