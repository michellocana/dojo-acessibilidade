import React from 'react'

import styles from './FullVideo.module.css'

function FullVideo({
  src,
  style = {},
  autoPlay = true,
  loop = true,
  muted = false,
  objectFit = 'cover'
}) {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted || window.isPresenter}
        style={{ objectFit, ...style }}
      >
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}

export default FullVideo
