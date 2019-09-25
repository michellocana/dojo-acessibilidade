import React from 'react'
import classnames from 'classnames'

import styles from './Button.module.css'

const Button = ({ theme, isOutlineVisible = true, children, className }) => {
  const containerClassName = classnames(styles.button, className, {
    [styles.buttonRed]: theme === 'red',
    [styles.buttonYellow]: theme === 'yellow',
    [styles.buttonBlue]: theme === 'blue',
    [styles.noOutline]: !isOutlineVisible
  })

  return <button className={containerClassName}>{children}</button>
}

export default Button
