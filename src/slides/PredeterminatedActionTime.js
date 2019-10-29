import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

function PredeterminatedActionTime() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Boas Práticas - Não dê um tempo determinado
        <br />
        para o usuário finalizar uma tarefa
      </Heading>

      <Notes>
        Por mais que a gente tente, a gente não pode prever todos os tipos de dificuldades que o
        usuário pode ter na nossa aplicação.
      </Notes>
    </Slide>
  )
}

export default PredeterminatedActionTime
