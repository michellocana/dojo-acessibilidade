import React from 'react'
import { Slide, Heading } from 'spectacle'

function AvoidOrtographicalErrors() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 15 }}>
        Evite erros ortográficos propositais
      </Heading>

      <img
        alt='Erro ortográfico proposital'
        src='./images/erro-ortografico-proposital.png'
        style={{ maxWidth: '100%', maxHeight: 460, height: '72vh' }}
      />
    </Slide>
  )
}

export default AvoidOrtographicalErrors
