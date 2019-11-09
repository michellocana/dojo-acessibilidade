import React from 'react'
import { Slide, Heading, Text, Appear, Notes } from 'spectacle'

import ContentText from './ContentText'

function ContentForVisualsOnly() {
  return (
    <Slide>
      <Heading size={1} fit caps style={{ paddingBottom: 10 }}>
        Use a propriedade "content" somente para fins visuais
      </Heading>

      <ContentText />

      <Text textColor='secondary' textSize={24} style={{ paddingTop: 20 }}>
        Mas todo texto que é setado via content não é selecionável, e também "não existe" para
        tecnologias assistivas
      </Text>

      <Appear>
        <Text textColor='secondary' textSize={24} style={{ paddingTop: 20 }}>
          Inclusive, a palavra "pseudo" em azul nesse slide é setada via content, tente selecionar
          ou copiar o texto dela
        </Text>
      </Appear>

      <Notes>Ênfase no PSEUDO, por que o elemento literalmente não existe</Notes>
    </Slide>
  )
}

export default ContentForVisualsOnly
