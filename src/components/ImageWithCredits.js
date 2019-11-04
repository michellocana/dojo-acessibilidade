import React from 'react'
import { Image, Link } from 'spectacle'

import styles from './ImageWithCredits.module.css'

function ImageWithCredits({ src, credits, creditsLink, author }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={src} className={styles.image} />
      </div>

      <Link
        target='_blank'
        href={creditsLink}
        className={styles.link}
        rel='noreferrer noopener'
        textColor='tertiary'
      >
        {`${credits} (${author})`}
      </Link>
    </div>
  )
}

export default ImageWithCredits