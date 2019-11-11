import React from 'react'
import classnames from 'classnames'

import styles from './ColorBlindnessInput.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const ColorBlindnessInput = ({
  id,
  showErrorColor,
  showErrorMessage,
  showErrorIcon,
  isGrayscale = false
}) => {
  const containerClassName = classnames(styles.container, {
    [styles.isGrayscale]: isGrayscale
  })
  const inputClassName = classnames(styles.input, {
    [styles.inputRed]: showErrorColor
  })

  const renderErrorIcon = () =>
    showErrorIcon && (
      <motion.img
        layoutTransition
        src='./images/error-icon.svg'
        className={styles.icon}
        initial={{
          width: 0,
          opacity: 0,
          marginRight: 0
        }}
        animate={{
          width: 30,
          opacity: 1,
          marginRight: 7
        }}
        exit={{
          width: 0,
          opacity: 0,
          marginRight: 0
        }}
      />
    )

  const renderErrorMessage = () =>
    showErrorMessage && (
      <motion.span
        className={styles.error}
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={{
          height: 'auto',
          opacity: 1
        }}
        exit={{
          height: 0,
          opacity: 0
        }}
      >
        Digite um e-mail válido
      </motion.span>
    )

  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={styles.label}>
        E-mail
      </label>

      <input type='text' id={id} name={id} value='joão da silva' className={inputClassName} />

      <div className={styles.errorWrapper}>
        <AnimatePresence>
          {renderErrorIcon()}
          {renderErrorMessage()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ColorBlindnessInput
