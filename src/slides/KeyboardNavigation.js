import React from 'react'
import { Slide, Heading, Notes, S } from 'spectacle'

import FullImage from '../components/FullImage'

function KeyboardNavigation() {
  return [
    <Slide>
      <Heading size={1} fit caps>
        Garanta uma boa
        <br />
        navegação por teclado
      </Heading>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Garanta que todo conteúdo <br />
        possa ser acessado com teclado
      </Heading>

      <Notes>
        Ajuda não só pessoas com{' '}
        <S type='bold' textColor='tertiary' caps>
          deficiências motoras
        </S>
        , mas também{' '}
        <S type='bold' textColor='tertiary' caps>
          powerusers
        </S>{' '}
        que tem costume de navegar com o teclado, o que é bem comum
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
        <S type='bold' textColor='tertiary' caps>
          scroll infinito
        </S>
      </Notes>
    </Slide>,

    <Slide>
      <Heading size={1} fit caps>
        Foco no estilo de foco
      </Heading>
      {/* TODO melhorar esse slide */}
      <Notes>
        Certifique-se que seja fácil de perceber quando qualquer elemento na tela está sendo focado
      </Notes>
    </Slide>
  ]
}

export default KeyboardNavigation
