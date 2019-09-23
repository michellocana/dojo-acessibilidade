import React, { useState } from 'react'
import FocusTrap from 'focus-trap-react'
import classnames from 'classnames'
import { Anim, Text } from 'spectacle'

import styles from './OutlineExample.module.css'

const TEXT = {
  noOutline: 'Sem outline ❌',
  outline: 'Com outline ✔️'
}

const OutlineExample = () => {
  const [isOutlineVisible, setIsOutlineVisible] = useState(false)
  const [text, setText] = useState(TEXT.noOutline)

  const redButtonClassName = classnames(styles.button, styles.buttonRed, {
    [styles.noOutline]: !isOutlineVisible
  })
  const yellowButtonClassName = classnames(styles.button, styles.buttonYellow, {
    [styles.noOutline]: !isOutlineVisible
  })
  const blueButtonClassName = classnames(styles.button, styles.buttonBlue, {
    [styles.noOutline]: !isOutlineVisible
  })

  return (
    <FocusTrap>
      <div>
        <Text textSize={32} textColor='primary' style={{ paddingTop: 40, paddingBottom: 20 }}>
          {text}
        </Text>

        <div className={styles.container}>
          <button className={redButtonClassName}>Button 1</button>
          <button className={yellowButtonClassName}>Button 2</button>
          <button className={blueButtonClassName}>Button 3</button>
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
