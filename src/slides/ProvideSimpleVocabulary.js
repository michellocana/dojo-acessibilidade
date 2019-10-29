import React from 'react'
import { Slide, Heading, List, ListItem, S } from 'spectacle'

function ProvideSimpleVocabulary() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Forneça um vocabulário simples...
        <br />
        sempre que possível evite:
      </Heading>

      <List>
        <ListItem>Metáforas: Pode confudir usuários com autismo</ListItem>
        <ListItem>
          Abreviações/acrônimos: Se usar, forneça o significado da sigla ou da abreviação (usando a
          tag
          <S type='bold' textColor='tertiary'>
            {' <abbr>'}
          </S>{' '}
          por exemplo)
        </ListItem>
      </List>
    </Slide>
  )
}

export default ProvideSimpleVocabulary
