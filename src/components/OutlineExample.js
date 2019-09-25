import React, { useState } from 'react'
import FocusTrap from 'focus-trap-react'
import { Anim, Text } from 'spectacle'

import Button from './Button'

import styles from './OutlineExample.module.css'

const TEXT = {
  noOutline: 'Sem outline ❌',
  outline: 'Com outline ✔️'
}

const OutlineExample = () => {
  const [isOutlineVisible, setIsOutlineVisible] = useState(false)
  const [text, setText] = useState(TEXT.noOutline)

  return (
    <FocusTrap>
      <div>
        <Text textSize={32} textColor='primary' style={{ paddingTop: 40, paddingBottom: 20 }}>
          {text}
        </Text>

        <div className={styles.container}>
          <Button theme='red' isOutlineVisible={isOutlineVisible}>
            Button 1
          </Button>

          <Button theme='yellow' isOutlineVisible={isOutlineVisible}>
            Button 2
          </Button>

          <Button theme='blue' isOutlineVisible={isOutlineVisible}>
            Button 3
          </Button>
        </div>

        <Anim
          easing='linear'
          fromStyle={{ opacity: 0 }}
          toStyle={[{ opacity: 1 }]}
          transitionDuration={100}
          onAnim={forwards => {
            if (forwards) {
              setIsOutlineVisible(true)
              setText(TEXT.outline)
            } else {
              setIsOutlineVisible(false)
              setText(TEXT.noOutline)
            }
          }}
        >
          <div />
        </Anim>
      </div>
    </FocusTrap>
  )
}

export default OutlineExample
