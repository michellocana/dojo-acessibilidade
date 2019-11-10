import React from 'react'

import { Link as SpectacleLink } from 'spectacle'

import styles from './Link.module.css'

function Link({ className = '', ...otherProps }) {
  const targetBlankClassName = otherProps.target === '_blank' ? styles.externalLink : ''
  const linkClassName = `${className} ${targetBlankClassName}`

  return <SpectacleLink className={linkClassName} {...otherProps} />
}

export default Link
