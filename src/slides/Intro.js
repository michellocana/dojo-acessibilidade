import React from 'react'
import { Slide, Heading, Notes, Image } from 'spectacle'

import TextHighlight from '../components/TextHighlight'
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
      <Image
        src='./images/logo-cwi.svg'
        style={{
          maxWidth: 400,
          marginBottom: 40
        }}
      />

      <Heading size={1} fit caps>
        Uma breve apresentação
      </Heading>

      <Notes>
        Acessibilidade parecia ser um <TextHighlight>assunto importante</TextHighlight> mas{' '}
        <TextHighlight>ninguém falava sobre</TextHighlight>
      </Notes>
    </Slide>
  ]
}

export default Intro
