import React, { useState } from 'react'
import { Layout, Fill, Anim } from 'spectacle'

import ColorBlindnessInput from './ColorBlindnessInput'

const ColorBlindnessExample = props => {
  const [showErrorColor, setShowErrorColor] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [showErrorIcon, setShowErrorIcon] = useState(false)

  return (
    <Layout style={{ paddingTop: 20, margin: '0 -20px', justifyContent: 'center', minHeight: 190 }}>
      <Fill>
        <ColorBlindnessInput
          id='colorInput'
          showErrorColor={showErrorColor}
          showErrorMessage={showErrorMessage}
          showErrorIcon={showErrorIcon}
        />
      </Fill>

      <Fill>
        <ColorBlindnessInput
          isGrayscale
          id='grayscaleInput'
          showErrorColor={showErrorColor}
          showErrorMessage={showErrorMessage}
          showErrorIcon={showErrorIcon}
        />
      </Fill>

      <Anim
        easing='linear'
        fromStyle={{ opacity: 0 }}
        toStyle={[{ opacity: 1 }]}
        transitionDuration={100}
        onAnim={forwards => {
          if (forwards) {
            setShowErrorColor(true)
          } else {
            setShowErrorColor(false)
          }
        }}
      >
        <div />
      </Anim>

      <Anim
        easing='linear'
        fromStyle={{ opacity: 0 }}
        toStyle={[{ opacity: 1 }]}
        transitionDuration={100}
        onAnim={forwards => {
          if (forwards) {
            setShowErrorMessage(true)
          } else {
            setShowErrorMessage(false)
          }
        }}
      >
        <div />
      </Anim>

      <Anim
        easing='linear'
        fromStyle={{ opacity: 0 }}
        toStyle={[{ opacity: 1 }]}
        transitionDuration={100}
        onAnim={forwards => {
          if (forwards) {
            setShowErrorIcon(true)
          } else {
            setShowErrorIcon(false)
          }
        }}
      >
        <div />
      </Anim>
    </Layout>
  )
}

export default ColorBlindnessExample
