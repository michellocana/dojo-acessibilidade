import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

import TextHighlight from '../components/TextHighlight'

function PredeterminatedActionTime() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Não dê um tempo determinado
        <br />
        para o usuário finalizar uma tarefa
      </Heading>

      <Notes>
        Por mais que a gente tente, não temos como prever todos os tipos de{' '}
        <TextHighlight>dificuldades</TextHighlight> que o usuário pode ter na nossa aplicação.
      </Notes>
    </Slide>
  )
}

export default PredeterminatedActionTime
