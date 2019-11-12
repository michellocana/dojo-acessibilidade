import React from 'react'
import { Slide, Heading, Notes, List, ListItem } from 'spectacle'

import TextHighlight from '../components/TextHighlight'

function ProvideSimpleVocabulary() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Forneça um vocabulário simples,
        <br />
        sempre que possível, evite o uso de:
      </Heading>

      <List>
        <ListItem>Metáforas</ListItem>
        <ListItem>Coloquialismo</ListItem>
        <ListItem>Expressões não literais</ListItem>
        <ListItem>Abreviações/acrônimos</ListItem>
      </List>

      <Notes>
        Usar uma linguagem que <TextHighlight>foge do padrão</TextHighlight> pode
        confundir/estressar o usuário com <TextHighlight>autismo</TextHighlight>
        <br />
        <br />
        Se usar <TextHighlight>abreviações</TextHighlight> ou{' '}
        <TextHighlight>acrônimos</TextHighlight> forneça o significado da sigla ou da abreviação
      </Notes>
    </Slide>
  )
}

export default ProvideSimpleVocabulary
