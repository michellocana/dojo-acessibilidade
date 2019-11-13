import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'
import TextHighlight from '../components/TextHighlight'

function GaiaProject() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 15 }}>
        GAIA - Guia de Acessibilidade de Interfaces para Autismo
      </Heading>

      <img
        alt='Erro ortográfico proposital'
        src='./images/projeto-gaia.png'
        style={{ maxWidth: '100%', maxHeight: '82vh' }}
      />

      <Notes>
        Trabalho de mestrado da Talita Pagani, para guiar as pessoas a construir{' '}
        <TextHighlight>interfaces amigáveis</TextHighlight> para{' '}
        <TextHighlight>usuários com autismo</TextHighlight>
      </Notes>
    </Slide>
  )
}

export default GaiaProject
