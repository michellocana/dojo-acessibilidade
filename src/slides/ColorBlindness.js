import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

import ColorBlindnessExample from '../components/ColorBlindnessExample'
import TextHighlight from '../components/TextHighlight'

function ColorBlindness() {
  return [
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 20 }}>
        Auxiliando usuários com Daltonismo
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

      <Notes>
        A <TextHighlight>monocromacia</TextHighlight> é o tipo mais raro de daltonismo{' '}
        <TextHighlight>(afeta 1 a cada 30000 pessoas)</TextHighlight>
      </Notes>
    </Slide>
  ]
}

export default ColorBlindness
