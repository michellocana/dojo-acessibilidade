import React from 'react'
import { Slide, Heading, Text, Notes } from 'spectacle'

import MetaViewport from '../components/MetaViewport'

function DontDisableZoom() {
  return (
    <Slide>
      <Heading size={1} fit caps>
        Boas Práticas - Não desabilite o zoom da página
      </Heading>

      <Text fit textColor='secondary' textSize={21}>
        Não tire o poder do usuário decidir o tamanho das coisas na tela
      </Text>

      <MetaViewport />

      <Notes>
        Desde que o RWD (design responsivo) começou a ser adotado, ficou comum o uso dessa meta tag
        <br />
        <br />
        Mas ela desabilita o zoom, então é melhor usar essa segunda versão dela
      </Notes>
    </Slide>
  )
}

export default DontDisableZoom
