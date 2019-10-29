import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

function LowScopeOfVision() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 15 }}>
        Pensando em deficiências - Campo de visão baixo
      </Heading>

      <img
        src='./images/low-scope-of-vision.png'
        alt='Exemplo de campo de visão baixo'
        style={{ maxWidth: '100%', maxHeight: '76vh' }}
      />

      <Notes>Manter informações relacionadas perto umas das outras</Notes>
    </Slide>
  )
}

export default LowScopeOfVision
