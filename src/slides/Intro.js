import React from 'react'
import { Slide, Heading } from 'spectacle'

import IntroBackground from '../components/IntroBackground'

function Intro() {
  return [
    <Slide>
      <IntroBackground />

      <Heading size={1} fit caps>
        Acessibilidade Web
      </Heading>

      <Heading size={2} fit caps>
        Como posso fazer minha parte?
      </Heading>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Uma breve apresentação
      </Heading>
    </Slide>,
  ]
}

export default Intro
