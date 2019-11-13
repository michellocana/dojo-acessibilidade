import React from 'react'
import { Slide, Heading, Text, S, Notes } from 'spectacle'

function SmoothScroll() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Cuidado com o scroll animado
      </Heading>

      <Text textColor='secondary' textAlign='left' style={{ paddingTop: 30 }}>
        Um scroll animado por muito tempo pode ser desagradável para pessoas com{' '}
        <S textColor='tertiary' type='bold'>
          epilepsia
        </S>
        .
        <br />
        <br />A duração máxima deve ser de 250ms (1/4 de segundo).
      </Text>

      <Notes>
        Faça uma animação rápida, ou não use animação.
        <br />
        <br />
        250ms é o tempo definido pela a WebAIM
      </Notes>
    </Slide>
  )
}

export default SmoothScroll
