import React from 'react'
import { Slide, Heading, Text, S } from 'spectacle'

function SmoothScroll() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Boas Práticas - Smooth scroll
      </Heading>

      <Text textColor='secondary' textAlign='left' style={{ paddingTop: 30 }}>
        Faça uma animação rápida, ou não use animação.
        <br />
        <br />
        Um scroll animado por muito tempo pode ser desagradável para pessoas com{' '}
        <S textColor='tertiary' type='bold'>
          epilepsia
        </S>
        .
        <br />
        <br />
        Segundo a WebAIM, o tempo máximo de smooth scroll deve ser de 250ms (1/4 de segundo).
      </Text>
    </Slide>
  )
}

export default SmoothScroll
