/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import FocusTrap from 'focus-trap-react'
import { Text } from 'spectacle'

import styles from './FlexOrderExample.module.css'
import Button from './Button'

const FlexOrderExample = () => {
  return (
    <FocusTrap>
      <div className={styles.wrapper}>
        <Text textColor='secondary' textSize={24} style={{ paddingTop: 20 }}>
          flex-direction: row ✔️
        </Text>
        <div className={styles.container}>
          <Button theme='red'>Button 1</Button>

          <Button theme='yellow'>Button 2</Button>

          <Button theme='blue'>Button 3</Button>
        </div>

        <Text textColor='secondary' textSize={24} style={{ paddingTop: 20 }}>
          flex-direction: row-reverse ❌
        </Text>

        <div className={styles.containerReverse}>
          <Button theme='red'>Button 1</Button>

          <Button theme='yellow'>Button 2</Button>

          <Button theme='blue'>Button 3</Button>
        </div>
      </div>
    </FocusTrap>
  )
}

export default FlexOrderExample
