import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

import ColorBlindnessExample from '../components/ColorBlindnessExample'

function ColorBlindness() {
  return (
    [
      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
          Pensando em deficiências - Daltonismo
        </Heading>

        <ColorBlindnessExample />
      </Slide>,

      <Slide>
        <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
          Não leve em conta que todos usuários
          <br />
          daltônicos enxergam tudo preto e branco
        </Heading>

        <img
          src='./images/daltonism-types.png'
          alt='Tipos de daltonismo'
          style={{ maxWidth: '100%' }}
        />

        <Notes>A monocromacia é o tipo mais raro de daltonismo (1:30000)</Notes>
      </Slide>,
    ]
  )
}

export default ColorBlindness
