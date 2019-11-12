import React from 'react'
import { Image } from 'spectacle'

import styles from './ImageWithCredits.module.css'

import Link from './Link'

function ImageWithCredits({
  src,
  credits,
  creditsLink,
  author,
  extraText,
  isVideo = false,
  videoType = 'video/mp4',
  style = {}
}) {
  function renderContent() {
    if (isVideo) {
      return (
        <video className={styles.image} autoPlay loop style={style}>
          <source src={src} type={videoType} />
        </video>
      )
    }

    return <Image src={src} className={styles.image} style={style} />
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>{renderContent()}</div>

      <Link
        target='_blank'
        href={creditsLink}
        className={styles.link}
        rel='noreferrer noopener'
        textColor='tertiary'
      >
        {`${credits} (${author || extraText})`}
      </Link>
    </div>
  )
}

export default ImageWithCredits
