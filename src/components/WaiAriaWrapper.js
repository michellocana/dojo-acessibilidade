import React, { useState } from 'react'
import { Layout, Fit, Fill, CodePane, Anim } from 'spectacle'

import WaiAria from './WaiAria'

import ComponentToStringService from '../services/ComponentToString'

const WaiAriaWrapper = props => {
  const [isFirstItemSelected, setIsFirstItemSelected] = useState(true)
  const [showAriaLabel, setShowAriaLabel] = useState(false)
  const [showRolePresentation, setShowRolePresentation] = useState(false)
  const [showAriaHidden, setShowAriaHidden] = useState(false)
  const [showAriaPressed, setShowAriaPressed] = useState(false)
  const [showAriaControls, setShowAriaControls] = useState(false)
  const [showAriaLabelledBy, setShowAriaLabelledBy] = useState(false)

  const animProps = {
    easing: 'linear',
    fromStyle: { opacity: 0 },
    toStyle: [{ opacity: 1 }],
    transitionDuration: 100
  }

  return (
    <>
      <Anim {...animProps} onAnim={forwards => setShowAriaLabel(forwards)}>
        <div />
      </Anim>

      <Anim {...animProps} onAnim={forwards => setShowRolePresentation(forwards)}>
        <div />
      </Anim>

      <Anim {...animProps} onAnim={forwards => setShowAriaPressed(forwards)}>
        <div />
      </Anim>

      <Anim {...animProps} onAnim={forwards => setShowAriaHidden(forwards)}>
        <div />
      </Anim>

      <Anim {...animProps} onAnim={forwards => setShowAriaControls(forwards)}>
        <div />
      </Anim>

      <Anim {...animProps} onAnim={forwards => setShowAriaLabelledBy(forwards)}>
        <div />
      </Anim>

      <Layout>
        <Fit>
          <WaiAria
            showAriaLabel={showAriaLabel}
            showAriaHidden={showAriaHidden}
            showAriaPressed={showAriaPressed}
            showAriaControls={showAriaControls}
            showAriaLabelledBy={showAriaLabelledBy}
            isFirstItemSelected={isFirstItemSelected}
            showRolePresentation={showRolePresentation}
            onButtonClick={isFirstItem => setIsFirstItemSelected(isFirstItem)}
          />
        </Fit>

        <Fill>
          <CodePane
            lang='html'
            source={ComponentToStringService.convert(
              <WaiAria
                showAriaLabel={showAriaLabel}
                showAriaHidden={showAriaHidden}
                showAriaPressed={showAriaPressed}
                showAriaControls={showAriaControls}
                showAriaLabelledBy={showAriaLabelledBy}
                isFirstItemSelected={isFirstItemSelected}
                showRolePresentation={showRolePresentation}
              />,
              {
                printWidth: 150
              }
            )}
          />
        </Fill>
      </Layout>
    </>
  )
}

export default WaiAriaWrapper
