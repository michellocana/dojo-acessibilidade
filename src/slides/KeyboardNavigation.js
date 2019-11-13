import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

import FullImage from '../components/FullImage'
import TextHighlight from '../components/TextHighlight'
import ImageWithCredits from '../components/ImageWithCredits'

function KeyboardNavigation() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Garanta que todo conteúdo <br />
        possa ser acessado com teclado
      </Heading>

      <Notes>
        Ajuda não só pessoas com <TextHighlight>deficiências motoras</TextHighlight>, mas também{' '}
        <TextHighlight>powerusers</TextHighlight> que tem costume de navegar com o teclado, o que é
        bem comum
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Scroll infinito atrapalha
        <br />
        navegação por teclado
      </Heading>
    </Slide>,

    <Slide progressColor='transparent'>
      <FullImage src='./images/medium-footer.jpg' style={{ objectPosition: 'top center' }} />

      <Notes>
        A home do medium não tem como focar com o teclado nessas informações à direita por que tem{' '}
        <TextHighlight>scroll infinito</TextHighlight>
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Não esqueça do estilo de foco
      </Heading>

      <Notes>
        Certifique-se que seja <TextHighlight>fácil de perceber</TextHighlight> quando qualquer
        elemento na tela está sendo focado
      </Notes>
    </Slide>,

    <Slide>
      <ImageWithCredits
        author='Zell'
        credits='Designing a focus style'
        src='./images/twitter-focus-management.gif'
        creditsLink='https://zellwk.com/blog/design-focus-style/'
      />
    </Slide>,

    <Slide>
      <ImageWithCredits
        author='Zell'
        credits='Designing a focus style'
        src='./images/bad-focus-style.gif'
        creditsLink='https://zellwk.com/blog/design-focus-style/'
      />
      <Notes>
        Um usuário daltônico pode (e vai) ter dificuldade de{' '}
        <TextHighlight>ver que o texto está com foco</TextHighlight> caso ele esteja navegando pelo
        teclado
      </Notes>
    </Slide>
  ]
}

export default KeyboardNavigation
